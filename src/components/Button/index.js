import React from 'react'
import style from './button.module.css'
import {Link} from 'react-router-dom'

function Button({ title, btn, color, onClick, type, datatoggle }) {
    return (
        <div>
            <button className={`${style[btn]} ${style[color]}`} onClick={onClick} type={type} data-toggle={datatoggle} aria-haspopup="true" aria-expanded="false" >{title}</button>
            <div class={[['dropdown-menu'], style['drowdown-box']].join(' ')}>
                <Link class="dropdown-item" to="#">Action</Link>
                <Link class="dropdown-item" to="#">Another action</Link>
                <Link class="dropdown-item" to="#">Something else here</Link>
            </div>
        </div>
    )
}

export default Button