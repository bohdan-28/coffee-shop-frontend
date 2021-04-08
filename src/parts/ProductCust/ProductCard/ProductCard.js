import React from 'react'
import { hazelnutlatte } from '../../../assets/images/'
import style from './productcard.module.css'

function ProductCard({ title, price, discount, routeChange }) {
    return (
        <div className={style['card-none']} onClick={routeChange}>
            <div className={style.disc}>
                <h4>10%</h4>
            </div>
            <img src={hazelnutlatte} alt="product" />
            <h4>hazelnut latte hazzelnut </h4>
            <h5>{price}</h5>
        </div>
    )
}

export default ProductCard
