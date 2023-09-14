import styles from "./ChunkedStatistics.module.scss"

import i18 from '../../i18';

import { useTranslation } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';

const ChunkedStatisticsHome = () => {
   const { t } = useTranslation();

   return (
      <I18nextProvider i18n={i18}>
      <div className={styles.main}>
         <div className={styles.section}>
            <h1>25%</h1>
            <h2>{t('advantages.liguidTitle')}</h2>
            <p>
               {t('advantages.liquidityPoolDescription')}
            </p>
         </div>
         <div className={styles.line1} />
         <div className={styles.section}>
            <h1>70%</h1>
            <h2>{t('advantages.equipmentBuyTitle')}</h2>
            <p>
               {t('advantages.purchaseOfEquipmentDescription')}
            </p>
         </div>
         <div className={styles.line2} />
         <div className={styles.section}>
            <h1>5%</h1>
            <h2>{t('advantages.bonusesTitle')}</h2>
            <p>
               {t('advantages.bonusesToInvestorsDescription')}
            </p>
         </div>
      </div>
      </I18nextProvider>
   )
}

export default ChunkedStatisticsHome
