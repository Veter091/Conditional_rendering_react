import { useState} from 'react'
import './Counter.css'

export default function Counter() {

    const [number, setNumber] = useState(0)

    function CounterOperationPlus() {
        setNumber(number + 1)
    }

    function CounterOperationMinus() {
        setNumber(number - 1)
    }

    
    return (

        <div className="counter">
            <div className="counter__container">

                <div className="counter__number">{number}</div>

                <div className="counter__menu-button">
                    <button onClick={CounterOperationPlus} className="counter__button">+1</button>
                    <button onClick={CounterOperationMinus} className="counter__button">-1</button>
                </div>

            </div>
        </div>
    )
}