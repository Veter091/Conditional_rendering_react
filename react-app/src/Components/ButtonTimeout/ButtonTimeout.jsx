import {useState} from 'react'
import './ButtonTimeout.css'

export default function ButtonTimeout() {

    const [counter, setCounter] = useState(0)

    function increaseByOne() {
        setTimeout(() => {
            setCounter(counter => counter + 1)
        }, 3000)
    }

    return (
        <div className="button-timeout">
            <div className="button-timeout__container">
                <div className="button-timeout__number">{counter}</div>
                <button onClick={increaseByOne} className="button-timeout__button">Увеличиить на 1</button>
            </div>
        </div>
    )
}