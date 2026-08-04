// i18n/request.ts
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const messages = 
    locale === 'en'
      ? (await import('../messages/en.json')).default
      : (await import('../messages/fr.json')).default;

  return { messages };
});