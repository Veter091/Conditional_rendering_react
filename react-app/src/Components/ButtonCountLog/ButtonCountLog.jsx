import {useState} from 'react'
import './ButtonCountLog.css'

export default function ButtonCountLog() {

    const [count, setCount] = useState(0)
    const [log, setLog] = useState([])


    function increaseCount() {

        let newCount = count + 1

        setCount(newCount)  

        setLog(elem => {
            const newElem = `Новое значение: ${newCount}`
            return [...elem, newElem]
        })

    }   

    return (
        <div className="count-log">
            <div className="count-log__container">
                <div className="count-log__number">{count} </div>
                <button
                onClick={increaseCount}
                className="count-log__button">Увеличить значение</button>
            </div>
        </div>
        
    )
}