"use client"
import styles from "./page.module.scss"

import Image from "next/image"

import { Dropdown } from "./widgets/dropdown/Dropdown"
import InfoList from "./widgets/infoList/InfoList"
import ChunkedStatisticsHome from "./widgets/chunkedStatistics/ChunkedStatisticHome"

import Button from "./shared/UI/Button"

import i18 from './i18';

import { useTranslation } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';
import { Contacts } from "./widgets/contacts/Contacts"

const Homepage = () => {

const { t } = useTranslation();

   return (
      <I18nextProvider i18n={i18}>
         <main className={styles.main}>
            <p className={styles.mainTitle}>
               {t('mainBlock.titlePowerHeader')}
            </p>
            <video
               id={styles.hologramAnimation}
               preload='auto'
               no-controls='true'
               autoPlay
               loop
               muted
            >
               <source src='/Hologram.mp4' type='video/mp4' />
            </video>
            <div className={styles.description}>
               <p>
                  {t('mainBlock.ESGDescriptionFirst')}
               </p>
               <p>
               {t('mainBlock.ESGDescriptionSecond')}
               </p>
            </div>
            <div className={styles.dropdownWrapper}>
               <Dropdown />
            </div>
            <div className={styles.coinWrapper}>
               <div className={styles.leftItems}>
                  <video
                     id={styles.KWcoinIcon}
                     preload='auto'
                     no-controls='true'
                     autoPlay
                     loop
                     muted
                     width={266}
                     height={266}
                  >
                     <source src='/KWcoin.webm' type='video/webm' />
                  </video>
               </div>
               <div className={styles.rightItems}>
                  <p className={styles.companyName}>
                     killowatt<span>coin</span>
                  </p>
                  <p className={styles.investmentInfo}>
                     {t('killowattCoinInfo.investment')}{" "}
                     <span className={styles.Killowat}> 
                        kilowatt<span className={styles.coin}>coin </span>
                     </span>
                     {t('killowattCoinInfo.investmentDescription')}
                  </p>
                  <Button type='filledLight'>{t('killowattCoinInfo.aboutKWBtn')}</Button>
               </div>
            </div>
            <div className={styles.idoWrapper}>
               <div className={styles.leftContainerIDO}>
                  <Button type='filledLight'>{t('IDOInfo.participateInIDO')}</Button>
               </div>
               <div className={styles.rightContainerIDO}>
                  <p className={styles.titleIDO}>IDO</p>
                  <p className={styles.descriptionIDO}><span>IDO</span> – {t('IDOInfo.this')} <span>{t('IDOInfo.smartContract')}</span>, {t('IDOInfo.IDODescription')}</p>
               </div>
            </div>
            <ChunkedStatisticsHome />
            <InfoList />

            <div className={styles.stakingWrapper}>
               <div className={styles.stakingTitle}>
                  <h1>{t('staking.title')}</h1>
                  <p>
                     <span>{t('staking.title')}</span> {t('staking.description')}
                  </p>

                  <ul>
                     <p>
                        <span>
                           {t('staking.subheading')}
                        </span>
                     </p>
                     <li>
                        <span>-</span> {t('staking.conditionsFirst')}
                     </li>
                     <li>
                        <span>-</span> {t('staking.conditionsSecond')}
                     </li>
                     <li>
                        <span>-</span> {t('staking.conditionsThird')}
                     </li>
                  </ul>
                  <p>
                     {t('staking.getReward')}
                  </p>
               </div>
               <div className={styles.images}>
                  <div>
                     <Image
                        alt=''
                        src={"/SolarPanels.jpg"}
                        height={100}
                        width={200}
                        className={styles.image}
                     />
                  </div>
                  <div>
                     <Image
                        alt=''
                        src={
                           "/4cca5621c0ab218c94241990d60df4e2_ce_800x426x0x0_cropped_666x444.jpg"
                        }
                        height={100}
                        width={200}
                        className={styles.image}
                     />
                  </div>
                  <div>
                     <Image
                        alt=''
                        src={"/istockphoto-1322319345-612x612.jpg"}
                        height={100}
                        width={200}
                        className={styles.image}
                     />
                  </div>
               </div>
            </div>
            <div className={styles.stakingCardsWrapper}>
               <div className={styles.card}>
                  <div className={styles.cardContent}>
                     <h1>{t('cardsStaking.titleFirstCard')}</h1>
                     <p>
                        {t('cardsStaking.descriptionFirstCard')}
                     </p>
                  </div>
                  <div className={styles.cardButtons}>
                     <Button type='filledDark'>{t('cardsStaking.buyKWBtn')}</Button>
                     <Button type='filledDark'>{t('cardsStaking.makeDepositBtn')}</Button>
                  </div>
               </div>
               <div className={styles.card}>
                  <div className={styles.cardContent}>
                     <h1>{t('cardsStaking.titleSecondCard')}</h1>
                     <p>
                        {t('cardsStaking.descriptionSecondCard')}
                     </p>
                  </div>
                  <div className={styles.cardButtons}>
                     <Button type='filledDark'>{t('cardsStaking.buyLPBtn')}</Button>
                     <Button type='filledDark'>{t('cardsStaking.makeDepositBtn')}</Button>
                  </div>
               </div>
            </div>
            <p className={styles.undercardTitle}>
               {t('cardsStaking.subheading')}
            </p>
            <Contacts/>
         </main>
      </I18nextProvider>
   )
}

export default Homepage
