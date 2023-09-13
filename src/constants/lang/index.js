import LocalizedStrings from 'react-native-localization';
import en from "./en";

let strings = new LocalizedStrings({
    en: en,
});

export const changingLanguage = async languageKey => {
  await AsyncStorage.setItem('language', languageKey);
  strings.setLanguage(languageKey);
};

export default strings;