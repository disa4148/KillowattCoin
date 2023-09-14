"use client"

import styles from "./ChunkedStatistics.module.scss"

import i18 from '../../i18';

import { useTranslation } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';

const ChunkedStatisticsToken = () => {
   const { t } = useTranslation();

   return (
      <I18nextProvider i18n={i18}>
         <div className={styles.main}>
            <div className={styles.section}>
               <h1>80%</h1>
               <h2>{t('token.cardTitleFirst')}</h2>
               <p>
                  {t('token.cardDescriptionFirst')}
               </p>
            </div>
            <div className={styles.line1} />
            <div className={styles.section}>
               <h1>20%</h1>
               <h2>{t('token.cardTitleSecond')}</h2>
               <p>
                  {t('token.cardDescriptionSecond')}
               </p>
            </div>
         </div>
      </I18nextProvider>
   )
}

export default ChunkedStatisticsToken
