import React from 'react'
import style from './card.module.css'

function CardHistory({ image, name, price, size, checked, onChange }) {
  return (

    <div className={style['history-card']}>
      <div className="d-flex">
        <img className={style['img-product']} src={image} alt="" />
        <div className="pl-3">
          <p className={style['title-History']}>{name}</p>
          <p className={style['price-history']}>IDR {price}</p>
          <p className={style.size}>{size}</p>
          <p className={style.status}>Delivered</p>
        </div>
        <input className={style.checkbox} checked={checked} type="checkbox" onChange={onChange} ></input>
      </div>
    </div>

  )
}

export default CardHistory
