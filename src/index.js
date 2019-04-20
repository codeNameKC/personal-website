import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {I18nextProvider, initReactI18next} from 'react-i18next';
import i18next from 'i18next';
import i18n from "i18next";
import common_da from "./translations/da/common.json";
import common_en from "./translations/en/common.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        common: common_en
      },
      da: {
        common: common_da
      },
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

ReactDOM.render(
    <I18nextProvider i18n={i18next}>
        <App/>
    </I18nextProvider>,
    document.getElementById('root')
);