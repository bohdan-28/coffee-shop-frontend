import React from "react";
import Swal from "sweetalert2";
import style from "./button.module.css";

function Button() {
  const handleClick = () => {
    Swal.fire({
      title: "Info!",
      text: "This feature is comming soon!",
      icon: "info",
      confirmButtonText: "Ok",
      confirmButtonColor: "#ffba33",
    });
  };

  return (
    <button className={style["btn-coupon"]} onClick={() => handleClick()}>
      Apply Coupon
    </button>
  );
}

export default Button;
