import React from 'react'
// import { hazelnutlatte } from '../../../../assets/images'
import style from './favoriteproduct.module.css'

function FavoriteProduct({img, productname, price}) {
    return (
        <div>
          <div className={style['every-one-fav']}>
           <p className={style['most-favorite']}>Everyone's Favorite</p>
           <div className="row ">
               <div className="col-6">
                   <div className={style['product-bg']}>
                       <img className={style['product-promo']} src={img} alt=""/>
                       <p className={style['product-name']}>{productname}</p>
                       <p className={style['price']}>{price}</p>
                       
                   </div> 
               </div>
               <div className="col-6">
                   <div className={style['product-bg']}>
                        <img className={style['product-promo']} src={img} alt=""/>
                        <p className={style['product-name']}>{productname}</p>
                        <p className={style['price']}>{price}</p>
                        

                   </div>
               </div>
               <div className="col-6">
                   <div className={style['product-bg']}>
                        <img className={style['product-promo']} src={img} alt=""/>
                        <p className={style['product-name']}>{productname}</p>
                        <p className={style['price']}>{price}</p>
                        
                   </div>
               </div>
               <div className="col-6">
                   <div className={style['product-bg']}>
                        <img className={style['product-promo']} src={img} alt=""/>
                        <p className={style['product-name']}>{productname}</p>
                        <p className={style['price']}>{price}</p>
                        
                   </div>
               </div>
           </div>
          </div>      
        </div>
    )
}

export default FavoriteProduct
