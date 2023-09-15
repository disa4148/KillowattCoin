"use client"

import styles from "./Contacts.module.scss"
import {
    BiMailSend,
    BiPaperPlane} from "react-icons/bi"
    import FeedbackForm from "@/app/shared/UI/FeedbackForm/FeedbackForm"
    import ToggleModal from "@/app/features/toggleModal/ToggleModal"
    import i18 from '../../i18';

    import { useTranslation } from 'react-i18next';
    import { I18nextProvider } from 'react-i18next';
export const Contacts = () => {

    const { t } = useTranslation();
    const toggleModalText:string = t('footer.feedbackBtn')

  return (
    <div className={styles.feedbackWrapper}>
               <div className={styles.contactBlock}>
                  <div className={styles.contactsWrapper}>
                     <BiMailSend size='30px' />
                     <p>mail@example.com</p>
                  </div>
                  <div className={styles.contactsWrapper}>
                     <BiPaperPlane size='30px' />
                     <p>t.me/telegramlink</p>
                  </div>
               </div>
               <div className={styles.feedbackButton}>
                  <ToggleModal text={toggleModalText} type="filledLight" form={<FeedbackForm/>}/>
                  
               </div>
</div>
  )
}



