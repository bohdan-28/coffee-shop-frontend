import React from 'react'
import style from './button.module.css'

function Button({ title, btn, onClick }) {
    return (
        <div>
            <button className={`${style[btn]}`} onClick={onClick}>{title}</button>
        </div>
    )
}

export default Button
