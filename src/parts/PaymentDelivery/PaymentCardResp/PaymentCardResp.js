import React from 'react'
import style from './paymentcardresp.module.css'

function PaymentCardResp({ image, title, desc, draw }) {
    return (
        <div className={style.card}>
            <img src={image} alt="" />
            <div className={style["card-title"]}>
                <p className={style.ptitle}>{title}</p>
                <p>{desc}</p>
            </div>
            <div className={style[`${draw}`]}>

            </div>
        </div>
    )
}

export default PaymentCardResp
