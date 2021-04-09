import React from 'react'
import style from './cardprogress.module.css'
import {more} from '../../../assets/images'

function CardProgress() {
  return (
    <div>
      <div className={style['card-progress']}>
        <h5 className={style['title']}>Monthly Report</h5>
        <img className={style['more']} src={more} alt=""/>
        <h5 className={style['date']}>15 April - 20 April</h5>

        {/* ============= ISI GRAFIK */}
        <div className="progress">
          <div className={style['progress-bar']} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>

        <div className={style['line']}></div>
        <div className={style['income-indicator']}> 
          <h5>Income</h5>
        </div>
        <div className={style['outcome-indicator']}> 
          <h5>Outcome</h5>
        </div>
      </div>
    </div>
  )
}

export default CardProgress
