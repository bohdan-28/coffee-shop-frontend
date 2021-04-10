import AsideLeft from "./AsideLeft";
import AsideRight from "./AsideRight";
import { React, Fragment, useEffect } from "react";
import style from "./editproduct.module.css";

const NewProduct = () => {
  return (
    <Fragment>
      <div className="container">
        <div className={style["product-detail"]}>
          {/* Ini untuk info navigasi */}
          <p className={style["title-route"]}>
            Favorite & Product <span>/Edit Product </span>{" "}
          </p>
          <div className="row">
            <div className="col-lg-5 pt-5">
              <AsideLeft />
            </div>
            <div className="col-lg-7 pt-5">
              <AsideRight />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default NewProduct;
