import styles from "./HeaderLinks.module.scss"

import Link from 'next/link'

import i18 from "@/app/i18";

import { useTranslation } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';

interface IHeaderItemEntry {
   title: string;
   path: string;
}

type IHeaderItems = IHeaderItemEntry[];

export const HeaderLinks: React.FC = () => {
   const {t} = useTranslation();
   const headerItems: IHeaderItems = t('headerItems', {returnObjects: true});

   return (
      <I18nextProvider i18n={i18}>
         <div className={styles.wrapper}>
            {headerItems.map((item: IHeaderItemEntry) => (
               <div className={styles.itemsWrapp} key={item.path}>
                  <Link className={styles.item} href={item.path}>{item.title}</Link>
               </div>
            ))}
         </div>
      </I18nextProvider>
   )
}
