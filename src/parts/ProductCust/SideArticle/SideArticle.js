import React from 'react'
import style from './sidearticle.module.css'

function SideArticle() {
    return (
        <div className={style['side-article']}>
            <h5>Promo Today</h5>
            <p>Coupons will updated every weeks.</p>
            <p>Check them out!</p>
        </div>
    )
}

export default SideArticle
