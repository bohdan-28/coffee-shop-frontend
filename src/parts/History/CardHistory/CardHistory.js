import React from 'react'
import style from './card.module.css'

function CardHistory({ onClick }) {
  return (

    <div className={style['history-card']}>
      <div className="d-flex">
        <img className={style['img-product']} src="http://www.southsoundtalk.com/wp-content/uploads/2019/11/Coffee-ander-Latte-e1573143205948.jpg" alt="" />
        <div className="pl-3">
          <p className={style['title-History']}>Veggie tomato mix</p>
          <p className={style['price-history']}>IDR 34.000</p>
          <p className={style.size}>XL (Extra Large)</p>
          <p className={style.status}>Delivered</p>
        </div>
        <input className={style.checkbox} type="checkbox" onClick={onClick} ></input>
      </div>
    </div>

  )
}

export default CardHistory
