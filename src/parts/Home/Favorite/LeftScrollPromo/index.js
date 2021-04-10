import React from 'react'
import { hazelnutlatte } from '../../../../assets/images'
import Style from './leftscrollpromo.module.css'


function LeftScrollPromo({imgproduct, productname, pricewithdisc }) {
    return (
        <div>
            <div className={Style['boxs']}>
                <div className={Style['box']}>
                <div className="row">
                    <div className="col">
                    <img className={Style['fav-img-mobile']} src={imgproduct} alt=""/>
                    <p className={Style['product-name']}>{productname}</p>
                    <p className={Style['price']}>IDR {pricewithdisc}</p>
                    </div>
                </div>
                </div>
                <div className={Style['box']}>
                <div className="row">
                    <div className="col">
                    <img className={Style['fav-img-mobile']} src={imgproduct} alt=""/>
                    <p className={Style['product-name']}>{productname}</p>
                    <p className={Style['price']}>IDR {pricewithdisc}</p>
                    </div>
                </div>
                </div>
                <div className={Style['box']}>
                <div className="row">
                    <div className="col">
                    <img className={Style['fav-img-mobile']} src={imgproduct} alt=""/>
                    <p className={Style['product-name']}>{productname}</p>
                    <p className={Style['price']}>IDR {pricewithdisc}</p>
                    </div>
                </div>
                </div>
                <div className={Style['box']}>
                <div className="row">
                    <div className="col">
                    <img className={Style['fav-img-mobile']} src={imgproduct} alt=""/>
                    <p className={Style['product-name']}>{productname}</p>
                    <p className={Style['price']}>IDR {pricewithdisc}</p>
                    </div>
                </div>
                </div>
                <div className={Style['box']}>
                <div className="row">
                    <div className="col">
                    <img className={Style['fav-img-mobile']} src={imgproduct} alt=""/>
                    <p className={Style['product-name']}>{productname}</p>
                    <p className={Style['price']}>IDR {pricewithdisc}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default LeftScrollPromo
