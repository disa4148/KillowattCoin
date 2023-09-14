"use client"
import React, { useState } from 'react';
import styles from "./Dropdown.module.scss"
import Image from "next/image"

import i18 from "@/app/i18";

import { useTranslation } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';

export const Dropdown: React.FC = () => {
  const { t } = useTranslation();

  const [isOpenArray, setIsOpenArray] = useState(() => Array(3).fill(false));

  const ToggleDropdown = (index: number) => {
    setIsOpenArray(prevState => {
      const updatedState = [...prevState];
      updatedState[index] = !updatedState[index];
      return updatedState;
    });
  }
  
    interface IDropdownItemEntry {
      title: string
      description: string
    }

    type IDropdownItems = IDropdownItemEntry[]

    const dropdownItems: IDropdownItems = t('dropdownItems', {returnObjects: true});

  return (
    <I18nextProvider i18n={i18}>
      {dropdownItems.map((item, index) => {
        const isOpen = isOpenArray[index];
        return (
          <div className={styles.wrapper} key={item.title} onClick={() => ToggleDropdown(index)}> 
            <div className={styles.titleContainer}>
              <p className={styles.title}>
                {item.title}
              </p>
              <Image
                priority
                src='/Arrow.svg'
                alt='Arrow'
                width={27}
                height={13}
                className={isOpen ? styles.arrowRotate : styles.arrow}
              />
            </div>
            {isOpen &&
              <div className={isOpen ? styles.contentIn : styles.contentOut}> <p>{item.description}</p> </div>
            }
          </div>
        );
      })}
    </I18nextProvider>
  )
}
