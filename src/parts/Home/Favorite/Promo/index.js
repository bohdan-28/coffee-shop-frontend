import React from 'react'
import style from './promo.module.css'
// import { hazelnutlatte } from '../../../../assets/images'
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

function Promo({imgproduct, productname, pricewithdisc, normalprice }) {
    const [getPromo, setgetPromo] = useState([]);

    useEffect(() => {
      axios.get(`${process.env.REACT_APP_API_URL}/products?sortBy=name&order=desc&page=1&perPage=6`)
      .then((res) => {
        const dataAllPromo = res.data.data;
        setgetPromo(dataAllPromo);
      })
      .catch((err) => {
        console.log(err);
      });
    }, []);
    return (
        <div>
          <div className={style['promo-for-you']}>
            <p className={style['most-favorite']}>Stay Hungry !</p>
            <div className="row ">
             {getPromo !== undefined ? getPromo.map((item) => {
                return (
                <>
                <div className="col-5 m-auto">
                    <div className={style['product-bg']}>
                        <img className={style['product-promo']} src={`${process.env.REACT_APP_API_IMG}${item.image}`} alt=""/>
                        <p className={style['price']}>IDR {item.price}</p>
                        <p className={style['product-name']}>{item.name}</p>
                        <p className={style['normal-price']}>IDR {item.price}</p>
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

export default Promo
