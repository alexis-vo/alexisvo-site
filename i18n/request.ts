// i18n/request.ts
import { getRequestConfig } from 'next-intl/server';

const locales = ['fr', 'en'];

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !locales.includes(locale)) {
    locale = 'fr';
  }

  const messages =
    locale === 'en'
      ? (await import('../messages/en.json')).default
      : (await import('../messages/fr.json')).default;

  return {
    locale,
    messages,
  };
});