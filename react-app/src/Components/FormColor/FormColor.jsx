import './FormColor.css'
import { useState, useId } from 'react'

export default function FormColor() {

    const selectId = useId()
    const [color, setColor] = useState('')


    return (
        <div className="form-color">

            <div className="form-color__container">

                <form className="form-color__form">

                <label
                htmlFor={selectId} 
                className="form-color__text">Выберите цвет</label>

                <select
                value={color}
                onChange={(e) => setColor(e.target.value)} 
                id={selectId} 
                className="form-color__select">
                    <option value="red" className="form-color__item">Красный</option>
                    <option value="blue" className="form-color__item">Синий</option>
                    <option value="green" className="form-color__item">Зеленый</option>
                </select>

                {color && (
                <div className="form-color__choose">Ваш любимый цвет - <span style={{color: color}}>
                    {color === 'red' && 'Красный'}
                    {color === 'blue' && 'Синий'} 
                    {color === 'green' && 'Зеленый'}  
                    </span></div>
                )}
                </form>
            </div>
        </div>
    )
}