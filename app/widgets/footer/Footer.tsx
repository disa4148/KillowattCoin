"use client"
import styles from "./Footer.module.scss"
import {
   BiLogoFacebook,
   BiLogoTwitter,
   BiLogoInstagram,
   BiLogoLinkedin,
   BiLogoYoutube,
} from "react-icons/bi"
import { AiFillTwitterCircle } from "react-icons/ai"
import Button from "@/app/shared/UI/Button"
import Image from "next/image"
import { HeaderLinks } from "@/app/features/headerLinks/HeaderLinks"

import i18 from '../../i18';

import { useTranslation } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';

const Footer = () => {
   const { t } = useTranslation();
   const toggleModalText:string = t('footer.feedbackBtn')
   return (
      <I18nextProvider i18n={i18}>
         <footer className={styles.feedbackBlock}>
            
            <div className={styles.main}>
               <div className={styles.copyright}>
                  <Image
                     src='/logo.svg'
                     height={100}
                     width={100}
                     alt='kilowatt logotype'
                  />
                  <div>
                     © 2022 KILOWATT<span>COIN</span>
                  </div>
               </div>
               <HeaderLinks />
      
               <Button type='filledLight'>{t('footer.buyCoin')}</Button>

            </div>
            <div className={styles.socialnetwork}>
               <a href='facebook.com/'>
                  <BiLogoFacebook size={"30px"} />
               </a>
               <a href='twitter.com/'>
                  <BiLogoTwitter size={"30px"} />
               </a>
               <a href='instagram.com/'>
                  <BiLogoInstagram size={"30px"} />
               </a>
               <a href='linkedin.com/'>
                  <BiLogoLinkedin size={"30px"} />
               </a>
               <a href='youtube.com/'>
                  <BiLogoYoutube size={"30px"} />
               </a>
            </div>
         </footer>
      </I18nextProvider>
   )
}

export default Footer
