import { useState} from 'react'
import './TextToggle.css'

export default function TextToggle() {
    
    const [text, changeText] = useState('Первый текст')

    function TextToggleChange() {
        changeText(text === 'Первый текст' ? 'Второй текст' : 'Первый текст')
    }

    return (

        <div className="some-text">
            <div className="some-text__container">

                <div className="some-text__text">{text} </div>
                <button onClick={TextToggleChange} className="some-text__button">Поменять текст</button>

            </div>
        </div>
    )
}