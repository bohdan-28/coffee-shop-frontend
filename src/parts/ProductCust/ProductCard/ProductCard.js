import React from 'react'
import {hazelnutlatte} from '../../../assets/images/'
import style from './productcard.module.css'

function ProductCard() {
    return (
        <div className={style.card}>
            <img src={hazelnutlatte} alt="product"/>
            <h4>Hazelnut Latte</h4>
            <h5>IDR 25.000</h5>
        </div>
    )
}

export default ProductCard
