import React from 'react'
import style from './cardaside.module.css'

function CardAsideRight() {
  return (
    <div>
      <div className={style['card-aside-right']}>
        <h5 className={style['title-card']} >Goals</h5>
        <h4 className={style['best-teks']}>Your goals is still on 76%. Keep up the good work!</h4>

        <div className={style['progress']}>
          <span className={style['progress-left']}>
            <span className={style['progress-bar']} ></span>
          </span>
          <span className={style['progress-right']}>
            <span className={style['progress-bar']}></span>
          </span>
          <div className={style['progress-value']}>76%</div>
        </div>
        <div className='d-flex justify-content-center pt-4 '>
          <div className={style['circle']}></div>
          <div className={style['circle']}></div>
          <div className={style['circle']}></div>
        </div>

      </div>
    </div>
  )
}

export default CardAsideRight
