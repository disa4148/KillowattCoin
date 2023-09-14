"use client"

import styles from "./tokenomic.module.scss"

import i18 from "@/app/i18"

import { useTranslation } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';

export const Tokenomic = () => {
  const { t } = useTranslation();
  return (
    <I18nextProvider i18n={i18}>
      <div className={styles.wrapper}>
          <h1 className={styles.header}>{t('token.titleTokenomics')}</h1>
          <div className={styles.borderWrapper}>
              <p className={styles.title}>{t('token.subheading')}</p>
              <h2 className={styles.numberCoins}>1.000.000.000 KW</h2>
          </div>
      </div>
    </I18nextProvider>
  )
}
