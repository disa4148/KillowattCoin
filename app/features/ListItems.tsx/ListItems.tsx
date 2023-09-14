"use client"
import styles from "./ListItems.module.scss"
import Masonry from "react-layout-masonry"

import i18 from "@/app/i18";

import { useTranslation } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';

interface IInfoListItemsEntry {
   percent: number
   title: string
   description: string
}

type IInfoListItems = IInfoListItemsEntry[]

export const ListItems: React.FC = () => {
   const { t } = useTranslation();
   const listItems: IInfoListItems = t('infoListItems', {returnObjects: true});
   
   return (
      <I18nextProvider i18n={i18}>
         <Masonry  columns={{ 550:1,770: 2,900: 3, 1200: 4 }} gap={28} className={styles.main}>
            {listItems.map((item:IInfoListItemsEntry) => (
               <div className={styles.itemsWrapper} key={item.title}>
                  <div className={styles.title}>
                     <h2 className={styles.percent}>{item.percent}%</h2>
                     <p>{item.title}</p>
                  </div>
                  <div className={styles.description}>
                     <p>{item.description}</p>
                  </div>
               </div>
            ))}
            
         </Masonry>
      </I18nextProvider>
   )
}
