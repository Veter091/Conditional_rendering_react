import {useState} from 'react'
import './ColorSwitcher.css'

export default function ColorSwitcher() {

    const [color, changeColor] = useState('black')

    function changeColorBlock() {
        changeColor(color === 'black' 
            ? 'yellow' 
            : 'black')
    }
   

    return (
        <div className="color-block">
            <div 
            onClick={changeColorBlock} className="color-block__container"
            style={{backgroundColor: color}}>
            </div>
        </div>
    )
}