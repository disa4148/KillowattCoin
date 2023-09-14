import React, { useState } from 'react'

import Button from '@/app/shared/UI/Button';
import Modal from '@/app/shared/UI/Modal/Modal';

interface IModalSettings {
    type: "filledLight" | "filledDark";
    text: string;
    form: React.ReactNode;
}

export const ToggleModal = ({type, text, form}: IModalSettings) => {
    const [modalActive, setModalActive] = useState(false);

    const toggledModal = () => {
        setModalActive(!modalActive)
    }
  return (
   <div>
        <div onClick={() => toggledModal()}>
            <Button type={type}>{text}</Button>
        </div>
      
        {modalActive && (
            <div>
                <Modal ModalActive={true} toggledModal={() => {setModalActive(!modalActive)}}>
                    {form}
                </Modal>
            </div>
        )}
    </div>
  )
}

export default ToggleModal