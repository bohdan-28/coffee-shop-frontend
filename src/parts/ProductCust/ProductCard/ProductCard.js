import React from "react";
import style from "./productcard.module.css";

function ProductCard({ image, title, price, discount, routeChange }) {
  const ImgUrl = process.env.REACT_APP_API_IMG;

  return (
    <div className={style["card-disc"]} onClick={routeChange}>
      <div className={style.disc}></div>
      <img src={`${ImgUrl}${image}`} alt="product" />
      <h4>{title}</h4>
      <h5>IDR {price}</h5>
    </div>
  );
}

export default ProductCard;
