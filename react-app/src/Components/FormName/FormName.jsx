import {useId} from 'react'
import { useState } from 'react'
import './FormName.css'

export default function FormName() {

    const id = useId()

    const [name, setName] = useState('')
    // const [submitted, setSubmitted] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        // setSubmitted(true)
        console.log(`Привет, ${name} !`)

    }


    return (
        <div className="form-name">

            <div className="form-name__container">

                <form 
                onSubmit={handleSubmit}
                className="form-name__form">
                    <label htmlFor={id} className="form-name__label">Имя:</label>
                    <input
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                    id={id} 
                    type="text" 
                    className="form-name__input"
                    placeholder='Введите имя...'
                    />

                    <button type='submit' className="form-name__button">Отправить</button>
                    <p className="form-name__p">Привет, {name} </p>
                </form>

                {/* <div className="form-name__greeting">{submitted ? `Привет, ${name}!`: ''} </div> */}
            
            </div>

        </div>
    )
}