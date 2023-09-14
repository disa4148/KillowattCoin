"use client"
import styles from "./TokenInfo.module.scss"
import Image from "next/image"
import Button from "@/app/shared/UI/Button"

import i18 from "@/app/i18"

import { useTranslation } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';

export const TokenInfo = () => {
    const { t } = useTranslation();
   return (
    <I18nextProvider i18n={i18}>
      <div className={styles.wrapper}>
         <div className={styles.leftContainerToken}>
            <span>
               KILLOWATT<span>COIN</span>
            </span>
            <p className={styles.bep20Description}>{t('token.description')}</p>
            <div className={styles.card}>
               <div className={styles.cardContent}>
                  <Image
                     alt='metaMaskFox.png'
                     src={"/metaMaskFox.png"}
                     height={118}
                     width={118}
                     
                  />
                  <p className={styles.secretKey}>0x8D5655...db56E1</p>
               </div>
               <div className={styles.cardButtons}>
                  <Button type='filledDark'>{t('token.buyBtn')}</Button>
                  <Button type='filledDark'>BscScan</Button>
               </div>
            </div>
         </div>
         <div className={styles.rightContainerToken}>
            <Image
               alt='kwLogo.png'
               src={"/kwLogo.png"}
               height={505}
               width={560}
               className={styles.kwLogo}
            />
         </div>
      </div>
    </I18nextProvider>
   )
}

export default TokenInfo
