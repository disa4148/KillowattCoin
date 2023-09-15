import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import "./LanguageSwitcher.scss"
import Image from "next/image"

export const LanguageSwitcher = () => {

const {i18n} = useTranslation();

const changeLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === 'ru' ? 'en' : 'ru'; // Если текущий язык русский, устанавливаем новый язык как английский 
    i18n.changeLanguage(newLanguage);


}
const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <div className='languageSwitch'>
    <div>
      <Image
        priority
        src='/Globe.svg'
        alt='Globe'
        width={24}
        height={24}
        
        onClick={() => setOpen(!isOpen)}
    />
    <ul className={`menuList ${isOpen ? "active"  : ""}`}>
      <li className="menuItem" onClick={() => i18n.changeLanguage('ru')}>Ru</li>
      <li className="menuItem" onClick={() => i18n.changeLanguage('en')}>Eng</li>
    </ul>
 </div>
 </div>
  )
}
