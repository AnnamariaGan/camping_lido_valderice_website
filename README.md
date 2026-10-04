# Sito web Camping Lido Valderice

Sito statico multilingue (italiano, inglese, tedesco, francese) costruito con [Astro](https://astro.build).

## Sviluppo

```sh
npm install
npm run dev      # server di sviluppo su http://localhost:4321
```

## Build e deploy

```sh
npm run build    # genera il sito statico in dist/
npm run preview  # anteprima locale della build
```

Il contenuto di `dist/` è il sito da pubblicare (GitHub Pages).

Il deploy è automatico: ogni push su `main` esegue `.github/workflows/deploy.yml`,
che fa la build con `withastro/action` e pubblica `dist/` con `actions/deploy-pages`.

Note di pubblicazione:

- la home `/` è un redirect immediato verso `/it/` (meta refresh, unica opzione su hosting statico). Se l'hosting permette redirect lato server, configurare un 301 da `/` a `/it/`; `/` è escluso dalla sitemap.
- la mappa di Google nella pagina contatti non viene caricata all'apertura: l'utente la attiva con un clic, così nessun cookie di terze parti parte prima del consenso.

## Struttura

- `src/pages/[lang]/` — le pagine, generate per ciascuna lingua (`/it/`, `/en/`, `/de/`, `/fr/`)
- `src/i18n/` — configurazione lingue e dizionario traduzioni (`ui.ts`)
- `src/assets/` — immagini ottimizzate in build (AVIF/WebP responsive)
- `astro.config.mjs` — configurazione i18n e redirect dalle vecchie URL `.html`
