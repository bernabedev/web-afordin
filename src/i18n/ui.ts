import type { KeyLang, KeyTranslation, UI } from './types.d'

export const languages = {
  en: 'English',
  es: 'Español',
  // add more languages here
  // ca: 'Catalan'
}

/**
 * @type {KeyLang}
 */
export const defaultLang: KeyLang = 'es'

/**
 * Respect the following contract for translation text string
 * Respetar el siguiente contrato para los string para la traduccion
 * @example '<component.prop>'
 * In case  of adding translation to a <ul> or <ol> add context to the translation key
 * En caso de agregar traduccion a un <ul> o <ol> agregar contexto a la key de traduccion
 * @example '<component.(ul|ol).prop>'
 */
export const ui = {
  es: {
    // community
    'community.title': 'Comunidad',
    'community.paragraph': 'Conecta, colabora y encuentra apoyo en cada paso de tu camino.',
    'community.button': 'Conócenos',
    // contributtors
    'contributtors.title': 'Nuestros maravillosos patrocinadores',
    'contributtors.paragraph': 'Gracias a todos los que lo hacen posible con su apoyo continuo.',
    // nav
    'nav.home': 'Inicio',
    'nav.values': 'Valores',
    'nav.projects': 'Valores',
    'nav.events': 'Eventos',
    'nav.contributor': 'Contribuyentes',
    // footer
    'footer.ul.home': 'Inicio',
    'footer.ul.ourValues': 'Nuestros valores',
    'footer.ul.aboutUs': 'Sobre nosotros',
    'footer.ul.events': 'Eventos',
    'footer.ul.community': 'Comunidad',
    'footer.ul.sponsors': 'Patrocinadores',
    'footer.paragraph.designed': 'Diseñado y desarrollado por',
    'footer.title': '¿Quiénes contribuyeron?',
    'footer.title.designer': 'Diseñadores',
    'footer.title.developers': 'Desarrolladores',
    'footer.title.viewers': 'Espectadores',
    // hero
    'hero.welcome': 'Bienvenido/a a Afordin',
    'hero.title': 'Aprende, crea y crece',
    'hero.title.second': 'en nuestra comunidad',
    'hero.paragraph': 'El conocimiento se multiplica cuando lo compartimos',
    'hero.button': 'Crece compartiendo',
    // values
    'values.title': 'Nuestros valores',
    'values.section.free.learning': 'Aprendizaje libre',
    'values.section.free.learning.paragraph': '',
    'values.section.shared.learning': 'Conocimiento compartido',
    'values.section.shared.learning.paragraph': '',
    'values.section.safe.overcoming': 'Superacion segura',
    'values.section.safe.overcoming.paragraph': '',
  },
  en: {
    // community
    'community.title': 'Community',
    'community.paragraph': 'Conect, collaborate and find help every step of the way.',
    'community.button': 'Get to know us',
    // contributtors
    'contributtors.title': 'Our wonderful sponsors',
    'contributtors.paragraph': 'Thanks to everyone who makes this possible with their continuous support.',
    // nav
    'nav.home': 'Home',
    'nav.values': 'Values',
    'nav.projects': 'Projects',
    'nav.events': 'Events',
    'nav.contributor': 'Contributors',
    // footer
    'footer.ul.home': 'Home',
    'footer.ul.ourValues': 'Our values',
    'footer.ul.aboutUs': 'About us',
    'footer.ul.events': 'Events',
    'footer.ul.community': 'Community',
    'footer.ul.sponsors': 'Sponsors',
    'footer.paragraph.designed': 'Designed and developed by',
    'footer.title': '¿Who contributed?',
    'footer.title.designer': 'Designers',
    'footer.title.developers': 'Developers',
    'footer.title.viewers': 'Viewers',
    // hero ->
    'hero.welcome': 'Welcome to Afordin',
    'hero.title': 'Learn, create and grow',
    'hero.title.second': 'in our community',
    'hero.paragraph': 'Knowledge multiples when we share it',
    'hero.button': 'Grow by sharing',
    // values
    'values.title': 'Our Values',
    'values.section.free.learning': 'Free learning',
    'values.section.free.learning.paragraph': '',
    'values.section.shared.learning': 'Shared learning',
    'values.section.shared.learning.paragraph': '',
    'values.section.safe.overcoming': 'Safe overcoming',
    'values.section.safe.overcoming.paragraph': '',
  },
} as const satisfies UI<KeyLang, KeyTranslation>
