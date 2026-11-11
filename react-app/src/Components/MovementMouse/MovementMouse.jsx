import './MovementMouse.css'
import { useState } from 'react'

export default function MovementMouse() {

    const [coords, setCoords] = useState({
        x: 0,
        y: 0,
    })

    function updateCoords(e) {
        setCoords({
            ...coords,
            x: e.clientX,
            y: e.clientY,
        })
    }


    return (
        <div className="movement-mouse">
            <div
            onMouseMove={updateCoords} 
            className="movement-mouse__container">

                <div className="movement-mouse__field">
                    <div className="movement-mouse__text">Координаты мыши:</div>
                    <div className="movement-mouse__coord">
                        {`x: ${coords.x} y: ${coords.y}`}
                    </div>
                </div>
            </div>
        </div>
    )
}