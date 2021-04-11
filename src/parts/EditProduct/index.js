import AsideLeft from "./AsideLeft";
import AsideRight from "./AsideRight";
import { React, Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "./editproduct.module.css";

const NewProduct = () => {
  const { getProduct } = useSelector((state) => state.productAdmin);
  const history = useHistory();
  const location = useLocation();
  const id = location.state.id;
  const handleClickFavourite = (event) => {
    history.push("/product-cust");
  };

  const handleClickTitle = (event) => {
    history.push(`/product-detail/${id}`);
  };

  return (
    <Fragment>
      <div className="container">
        <div className={style["product-detail"]}>
          {/* Ini untuk info navigasi */}
          <p className={style["title-route"]}>
            <span className={style["main"]} onClick={handleClickFavourite}>
              {" "}
              Favorite & Product{" "}
            </span>
            <span onClick={handleClickTitle}>
              {`/${getProduct.name}`}{" "}
            </span>{" "}
            <span>/Edit Product</span>{" "}
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
