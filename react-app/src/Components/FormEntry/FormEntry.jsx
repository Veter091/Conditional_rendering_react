import { useId } from "react";
import { useState } from "react";
import './FormEntry.css'

export default function FormEntry() {

    const idLogin = useId()
    const idPassword = useId()

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [submit, setSubmit] = useState(null)


    function controlFormSubmit(e) {
        e.preventDefault()

        if (login !== '' && password !== '') {
            setSubmit(true)
        }
        else {
            setSubmit(false)
        }
    }

    return (
        <div className="form-entry">

            <div className="form-entry__container">

                <form 
                onSubmit={controlFormSubmit}
                className="form-entry__form">

                <label htmlFor={idLogin} className="form-entry__label">Логин:</label>
                <input
                value={login}
                onChange={(e) => setLogin(e.target.value)} 
                id={idLogin} 
                type="text" 
                className="form-entry__input" 
                placeholder="Введите логин..." />

                <label htmlFor={idPassword} className="form-entry__label">Пароль:</label>
                <input
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                id={idPassword} 
                type="password" 
                className="form-entry__input" 
                placeholder="Введите пароль..."/>

                <button 
                type="submit" 
                className="form-entry__button">Войти</button>

                <div
                className="form-entry__text">
                    {submit === true && `Добро пожаловать, ${login}!`}
                    {submit === false && 'Пожалуйста, заполните все поля.'}
                    {submit === null && ''}
                    
                    </div>

                </form>

            </div>

        </div>
    )
}