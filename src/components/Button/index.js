import React from 'react'
import style from './button.module.css'

function Button({ title, btn, color, onClick }) {
    return (
        <div>
            <button className={`${style[btn]} ${style[color]}`} onClick={onClick}>{title}</button>
        </div>
    )
}

export default Button