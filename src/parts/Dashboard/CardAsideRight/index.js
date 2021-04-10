import React from 'react'
import style from './cardaside.module.css'
import { adminIMG } from '../../../assets/images'

function CardAsideRight() {
  return (
    <div>
      <div className={style['card-aside-right']}>
        <div className="row">
          <div className="col">
            <img src={adminIMG} alt="" />
          </div>
          <div className="col">
            <h5 className={style['admin-name']} >Cheryln Laurent</h5>
            <h5 className={style['quotes']}>Keep up the good work and spread love</h5>
          </div>
        </div>
        <div className={style['line']}></div>
        <h4 className={style['best-teks']}>Best Staff of the Month</h4>

        <div className={style['progress']}>
          <span className={style['progress-left']}>
            <span className={style['progress-bar']} ></span>
          </span>
          <span className={style['progress-right']}>
            <span className={style['progress-bar']}></span>
          </span>
          <div className={style['progress-value']}>90%</div>
        </div>

        <h4 className={style['achive-teks']}>Achieved 3.5M of total 5M 478 Customer</h4>
      </div>
    </div>
  )
}

export default CardAsideRight
