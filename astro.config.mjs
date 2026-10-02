// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Camping Lido Valderice — sito statico, zero JS client, i18n con prefisso per tutte le lingue.
export default defineConfig({
  site: 'https://campinglidovalderice.it',
  output: 'static',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en', 'de', 'fr'],
    routing: {
      prefixDefaultLocale: true,
      // La pagina "/" è gestita da src/pages/index.astro (redirect immediato).
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // "/" è solo un redirect alla lingua predefinita: non va indicizzato.
      filter: (page) => page !== 'https://campinglidovalderice.it/',
      i18n: {
        defaultLocale: 'it',
        locales: { it: 'it-IT', en: 'en', de: 'de-DE', fr: 'fr-FR' },
      },
    }),
  ],
  redirects: {
    '/pages/piazzoleCamper.html': '/it/piazzole/',
    '/pages/piazzoleTende.html': '/it/piazzole/',
    '/pages/piazzoleTende2.html': '/it/piazzole/',
    '/pages/caseMobili.html': '/it/case-mobili/',
    '/pages/risto_market.html': '/it/risto-market/',
    '/pages/eventi.html': '/it/',
    '/pages/territorio.html': '/it/territorio/',
    '/pages/prezzi.html': '/it/prezzi/',
    '/pages/contatti.html': '/it/contatti/',
  },
  build: {
    // Il CSS (un solo chunk condiviso ~4kB) viene inlineato: elimina l'unica
    // richiesta render-blocking (152ms stimati dall'insight di Chrome).
    inlineStylesheets: 'always',
  },
  // Cache delle trasformazioni immagini fuori da node_modules: sopravvive a npm ci.
  cacheDir: './.astro',
});
