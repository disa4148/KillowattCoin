"use client"
import styles from "./StatisticApi.module.scss"
import Button from "@/app/shared/UI/Button"

import i18 from '../../i18';

import { useTranslation } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';

export const StatisticApi = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
        <h1 className={styles.header}>
        {t('token.statisticsTitle')}
        </h1>
        <div className={styles.webstat}>
            this is statistic image
        </div>
        <div className={styles.anotherStatWrapper}>
            <p className={styles.title}>
            {t('token.statisticsSubheading')}
            </p>
            <div className={styles.anotherStatButtons}>
                <Button type="filledLight" >
                DEXTools
                </Button>
                <Button type="filledLight" >
                CoinBrain
                </Button>
            </div>
        </div>
    </div>
  )
}
