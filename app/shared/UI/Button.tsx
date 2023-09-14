import styles from "./Button.module.scss"

interface IButton {
   type: "filledLight" | "filledDark"
   children: string
   disabled?: boolean
}

export const Button = ({ type, disabled, children }: IButton) => {
   return (
      <div>
         {type === "filledLight" && (
            <button
               type='submit'
               disabled={disabled}
               className={styles.BtnfilledLight}
            >
               {children}
            </button>
         )}

         {type === "filledDark" && (
            <button
               type='submit'
               disabled={disabled}
               className={styles.BtnfilledDark}
            >
               {children}
            </button>
         )}
      </div>
   )
}

export default Button
