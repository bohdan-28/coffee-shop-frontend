import React from 'react'
import style from './couponcard.module.css'

function CouponCard({ color, pict ,title, text}) {
    return (
        <div className={style[`${color}`]}>
            <img src={pict} alt=""/>
            <div className={style['card-text']}>
            <h5>{title}</h5>
            <p>{text}</p>
            </div>
        </div>
    )
}

export default CouponCard
