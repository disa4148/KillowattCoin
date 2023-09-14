"use client"
import Image from "next/image"
import Link from "next/link"

import styles from "./Header.module.scss"

import { HeaderLinks } from "@/app/features/headerLinks/HeaderLinks"
import Button from "@/app/shared/UI/Button"

import { LanguageSwitcher } from "@/app/features/languageSwitcher/LanguageSwitcher"

import i18 from "@/app/i18";

import { useTranslation } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';
const Header: React.FC = () => {
   const { t } = useTranslation();
   return (
      <header className={styles.wrapper }>
         <Link href={"/"}>
            <Image
               priority
               src='/logo.svg'
               alt='Logotype'
               width={100}
               height={90}
            />
         </Link>
         <HeaderLinks />
         <div className={styles.rightItems}>
            <Button type='filledLight'>{t('header.buyBtn')}</Button>
            <LanguageSwitcher/>
         </div>
      </header>
   )
}
export default Header
