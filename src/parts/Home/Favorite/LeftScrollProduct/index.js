import React from 'react'
import Style from './leftscrollproduct.module.css'
// import { hazelnutlatte } from '../../../../assets/images'
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

function LeftScrollProduct() {
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
            <div className={Style['boxs']}>
              {getFavorite !== undefined ? getFavorite.map((item) => {
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

export default LeftScrollProduct
