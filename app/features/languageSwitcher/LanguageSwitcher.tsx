import React from 'react'
import { useTranslation } from 'react-i18next'

import Image from "next/image"

export const LanguageSwitcher = () => {

const {i18n} = useTranslation();

const changeLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === 'ru' ? 'en' : 'ru'; // Если текущий язык русский, устанавливаем новый язык как английский 
    i18n.changeLanguage(newLanguage);
}
  return (
    <div>
      <Image
        priority
        src='/Globe.svg'
        alt='Globe'
        width={24}
        height={24}
        onClick={changeLanguage}
    />
 </div>
  )
}
