import React from 'react'
// import { hazelnutlatte } from '../../../../assets/images'
import Style from './leftscrollpromo.module.css'
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

function LeftScrollPromo({imgproduct, productname, pricewithdisc }) {
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
            <div className={Style['boxs']}>
              {getPromo !== undefined ? getPromo.map((item) => {
                return (
                <>
                <div className={Style['box']}>
                <div className="row">
                    <div className="col">
                    <img className={Style['fav-img-mobile']} src={`${process.env.REACT_APP_API_IMG}${item.image}`} alt=""/>
                    <p className={Style['product-name']}>{item.name}</p>
                    <p className={Style['price']}>IDR {item.price}</p>
                    </div>
                </div>
                </div>
                </>
                );
                })
              : Swal("try again")}
            </div>
        </div>
    )
}

export default LeftScrollPromo
