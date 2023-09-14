
import Button from "../Button"



export const FeedbackForm = () => {
   return (
         <form onSubmit={() => console.log("Допишите онсабмит в фидбек форме // UI")}>
            <h1>Заполните форму</h1>
            <h2>И мы с Вами свяжемся!</h2>
            <p>Имя:</p>
            <input type='text' placeholder='Имя' name='name' />
            <p>Эл-почта:</p>
            <input type='email' placeholder='Email' name='email' />
            <p>Тема:</p>
            <input type='text' placeholder='Тема' name='Theme' />
            <p>Сообщение:</p>
            <textarea placeholder='Сообщение' name='message' />
            <Button type='filledLight'>Отправить</Button>
         </form>
   )
}

export default FeedbackForm
