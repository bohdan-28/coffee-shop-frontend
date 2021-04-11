import React from 'react'
import Style from './leftscrollproduct.module.css'
// import { hazelnutlatte } from '../../../../assets/images'


function LeftScrollProduct({img, productname, price }) {
    return (
        <div>
            <div className={Style['boxs']}>
              <div className={Style['box']}>
                <div className="row">
                  <div className="col">
                    <img className={Style['fav-img-mobile']} src={img} alt=""/>
                    <p className={Style['product-name']}>{productname}</p>
                    <p className={Style['price']}>{price}</p>
                  </div>
                </div>
              </div>
              <div className={Style['box']}>
                <div className="row">
                  <div className="col">
                    <img className={Style['fav-img-mobile']} src={img} alt=""/>
                    <p className={Style['product-name']}>{productname}e</p>
                    <p className={Style['price']}>{price}</p>
                  </div>
                </div>
              </div>
              <div className={Style['box']}>
                <div className="row">
                  <div className="col">
                    <img className={Style['fav-img-mobile']} src={img} alt=""/>
                    <p className={Style['product-name']}>{productname}</p>
                    <p className={Style['price']}>{price}</p>
                  </div>
                </div>
              </div>
              <div className={Style['box']}>
                <div className="row">
                  <div className="col">
                    <img className={Style['fav-img-mobile']} src={img} alt=""/>
                    <p className={Style['product-name']}>{productname}</p>
                    <p className={Style['price']}>{price}</p>
                  </div>
                </div>
              </div>
              <div className={Style['box']}>
                <div className="row">
                  <div className="col">
                    <img className={Style['fav-img-mobile']} src={img} alt=""/>
                    <p className={Style['product-name']}>{productname}</p>
                    <p className={Style['price']}>{price}</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default LeftScrollProduct
