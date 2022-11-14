import * as Localization from "expo-localization";
import { I18n } from "i18n-js";
// import { useSelector } from "react-redux";

interface ILocalizationTypes {
  lang: "ja" | "en" | "eh";
}
// Set the key-value pairs for the different languages you want to support.
export const useLocalization = (data?: ILocalizationTypes) => {
  // const getDefaultLanguage = useSelector(selectDefaultLanguage)

  const translations = {
    en: { welcome: "Hello", name: "Charlie" },
    ja: { welcome: "こんにちは" },
  };
  const i18n = new I18n(translations);

  // Set the locale once at the beginning of your app.
  i18n.locale = data?.lang || Localization.locale;

  // When a value is missing from a language it'll fallback to another language with the key present.
  i18n.enableFallback = true;
  // To see the fallback mechanism uncomment line below to force app to use Japanese language.
  // i18n.locale = 'ja';

  return { i18n };
};
