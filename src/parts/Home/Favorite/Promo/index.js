import React from 'react'
import style from './promo.module.css'
import { hazelnutlatte } from '../../../../assets/images'

function Promo({imgproduct, productname, pricewithdisc, normalprice }) {
    return (
        <div>
          <div className={style['promo-for-you']}>
            <p className={style['most-favorite']}>Stay Hungry !</p>
            <div className="row ">
                <div className="col-5 m-auto">
                    <div className={style['product-bg']}>
                        <img className={style['product-promo']} src={imgproduct} alt=""/>
                        <p className={style['price']}>IDR {pricewithdisc}</p>
                        <p className={style['product-name']}>{productname}</p>
                        <p className={style['normal-price']}>IDR {normalprice}</p>
                    </div>
                </div>
                <div className="col-5 m-auto">
                    <div className={style['product-bg']}>
                        <img className={style['product-promo']} src={imgproduct} alt=""/>
                        <p className={style['price']}>IDR {pricewithdisc}</p>
                        <p className={style['product-name']}>{productname}</p>
                        <p className={style['normal-price']}>IDR {normalprice}</p>
                    </div>
                </div>
                <div className="col-5 m-auto">
                    <div className={style['product-bg']}>
                        <img className={style['product-promo']} src={imgproduct} alt=""/>
                        <p className={style['price']}>IDR {pricewithdisc}</p>
                        <p className={style['product-name']}>{productname}</p>
                        <p className={style['normal-price']}>IDR {normalprice}</p>
                    </div>
                </div>
                <div className="col-5 m-auto">
                    <div className={style['product-bg']}>
                        <img className={style['product-promo']} src={imgproduct} alt=""/>
                        <p className={style['price']}>IDR {pricewithdisc}</p>
                        <p className={style['product-name']}>{productname}</p>
                        <p className={style['normal-price']}>IDR {normalprice}</p>
                    </div>
                </div>
            </div>
          
          </div>  
        </div>
    )
}

export default Promo
