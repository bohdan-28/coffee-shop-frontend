import React from 'react'
// import { hazelnutlatte } from '../../../../assets/images'
import style from './favoriteproduct.module.css'
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

function FavoriteProduct({img, productname, price}) {
    const [getFavorite, setGetFavorite] = useState([]);

    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}/products/favourite?sortBy=name&order=asc&page=1&perPage=6`)
        .then((res) => {
            const dataAllFavorite = res.data.data;
            setGetFavorite(dataAllFavorite);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
    return (
        <div>
          <div className={style['every-one-fav']}>
           <p className={style['most-favorite']}>Everyone's Favorite</p>
           <div className="row ">
            {getFavorite !== undefined ? getFavorite.map((item) => {
              return (
              <>
               <div className="col-6">
                   <div className={style['product-bg']}>
                       <img className={style['product-promo']} src={`${process.env.REACT_APP_API_IMG}${item.image}`} alt=""/>
                       <p className={style['product-name']}>{item.name}</p>
                       <p className={style['price']}>IDR {item.price}</p>
                   </div> 
               </div>
              </>
              );
              })
            : Swal("try again")}
           </div>
          </div>      
        </div>
    )
}

export default FavoriteProduct
