export const locales = ['it', 'en', 'de', 'fr'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'it';

/** Etichetta visualizzata nello switcher di lingua */
export const localeNames: Record<Locale, string> = {
  it: 'IT',
  en: 'EN',
  de: 'DE',
  fr: 'FR',
};

/** Nome esteso della lingua, per l'etichetta accessibile dello switcher */
export const localeFullNames: Record<Locale, string> = {
  it: 'Italiano',
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
};

/** lang= completo per <html lang> e hreflang */
export const localeHtmlLang: Record<Locale, string> = {
  it: 'it-IT',
  en: 'en',
  de: 'de-DE',
  fr: 'fr-FR',
};

/** og:locale Open Graph */
export const localeOg: Record<Locale, string> = {
  it: 'it_IT',
  en: 'en_US',
  de: 'de_DE',
  fr: 'fr_FR',
};

/** Rotte condivise: stesso slug per tutte le lingue. */
export const routes = {
  home: '',
  piazzole: 'piazzole',
  casette: 'case-mobili',
  ristorazione: 'risto-market',
  territorio: 'territorio',
  prezzi: 'prezzi',
  contatti: 'contatti',
} as const;

export type RouteKey = keyof typeof routes;

/** Percorso localizzato: /<lang>/<route>/ (la home è /<lang>/) */
export function localizedPath(lang: Locale, route: RouteKey = 'home'): string {
  const slug = routes[route];
  return slug ? `/${lang}/${slug}/` : `/${lang}/`;
}

/** Date le alternatives di una pagina, restituisce l'URL nella lingua richiesta.
 *  Le pagine condividono lo slug tra lingue, quindi basta sostituire il prefisso. */
export function switchLang(pathname: string, target: Locale): string {
  const rest = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, '');
  return `/${target}${rest || '/'}`;
}
