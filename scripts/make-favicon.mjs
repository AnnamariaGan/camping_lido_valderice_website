#!/usr/bin/env node
// Rigenera public/favicon.ico partendo da src/assets/logo.webp.
// ICO con voci PNG (16/32/48) — formato "PNG-in-ICO" supportato da tutti i browser moderni.
// Avvio manuale: node scripts/make-favicon.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import sharp from 'sharp';

const SRC = 'src/assets/logo.webp';
const OUT = 'public/favicon.ico';
const SIZES = [16, 32, 48];

const pngs = await Promise.all(
  SIZES.map(async (size) => ({
    size,
    data: await sharp(SRC)
      .resize(size, size, { fit: 'cover', position: 'attention' })
      .png()
      .toBuffer(),
  })),
);

// ICO header: 6 byte di header + 16 byte per voce.
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(pngs.length, 4); // count

const offsetBase = 6 + pngs.length * 16;
const entries = [];
let offset = offsetBase;
for (const { size, data } of pngs) {
  const entry = Buffer.alloc(16);
  entry.writeUInt8(size === 256 ? 0 : size, 0); // width (0 = 256)
  entry.writeUInt8(size === 256 ? 0 : size, 1); // height
  entry.writeUInt8(0, 2); // color palette
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // color planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(data.length, 8); // size of image data
  entry.writeUInt32LE(offset, 12); // offset of image data
  offset += data.length;
  entries.push(entry);
}

const total = offsetBase + pngs.reduce((n, p) => n + p.data.length, 0);
const ico = Buffer.concat([header, ...entries, ...pngs.map((p) => p.data)], total);
writeFileSync(OUT, ico);
console.log(`${OUT}: ${ico.length} bytes, sizes ${SIZES.join('/')}`);
