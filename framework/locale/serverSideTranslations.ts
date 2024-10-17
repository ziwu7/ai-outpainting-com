import { AVAILABLE_LOCALES } from './locale'
import { loadTranslationMessagesOnServerSide } from './messagesLoader'
import { ServerSideGeneratedI18nNamespace } from './types'

export const serverSideTranslations = async (
  initialLocale: AVAILABLE_LOCALES
): Promise<ServerSideGeneratedI18nNamespace> => {
  if (typeof initialLocale !== 'string') {
    throw new Error(
      'Initial locale argument was not passed into serverSideTranslations'
    )
  }

  return {
    _i18nPropsNamespace: {
      initialLocale,
      initialMessages:
        (await loadTranslationMessagesOnServerSide(initialLocale)) ?? {}
    },
    locale: initialLocale
  } as ServerSideGeneratedI18nNamespace
}
