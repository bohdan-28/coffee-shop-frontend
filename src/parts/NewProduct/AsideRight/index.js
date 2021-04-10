import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertProductProcess } from "../../../configs/redux/actions/productAdmin";
import { isUndefined } from "util";
import Swal from "sweetalert2";
import style from "./asideright.module.css";
import Button from "../Button/Button";
import { useHistory } from "react-router-dom";

const AsideRight = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { insertProduct, loading } = useSelector((state) => state.productAdmin);

  const handleFormChange = (event) => {
    insertProduct[event.target.name] = event.target.value;
    // this.setState(state.product.insertProduct)
    dispatch({
      type: "ONCHANGE_INSERT_PRODUCT",
      action: (insertProduct[event.target.name] = event.target.value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const {
      name,
      price,
      categoryID,
      description,
      size,
      deliveryMethod,
      hourEnd,
      hourStart,
      stock,
      image,
    } = insertProduct;
    if (
      name &&
      price &&
      categoryID &&
      description &&
      size &&
      deliveryMethod &&
      hourEnd &&
      hourStart &&
      stock &&
      !isUndefined(image)
    ) {
      const formData = new FormData();
      formData.append("name", insertProduct.name);
      formData.append("price", insertProduct.price);
      formData.append("image", insertProduct.image);
      formData.append("categoryID", insertProduct.categoryID);
      formData.append("deliveryMethod", insertProduct.deliveryMethod);
      formData.append("description", insertProduct.description);
      formData.append("hourEnd", insertProduct.hourEnd);
      formData.append("stock", insertProduct.stock);
      formData.append("size", insertProduct.size);
      formData.append("hourStart", insertProduct.hourStart);
      console.log(insertProduct);
      //   dispatch(insertProductProcess());
      dispatch(insertProductProcess(formData))
        .then((res) => {
          Swal.fire({
            title: "Success!",
            text: res,
            icon: "success",
            confirmButtonText: "Ok",
            confirmButtonColor: "#ffba33",
          });
        })
        .catch((err) => {
          Swal.fire({
            title: "Error!",
            text: err.message,
            icon: "error",
            confirmButtonText: "Ok",
            confirmButtonColor: "#6a4029",
          });
        });
    } else {
      console.log(insertProduct);
      Swal.fire({
        title: "Information!",
        text: "Please fill all fields.",
        icon: "info",
        confirmButtonText: "Ok",
        confirmButtonColor: "#ffba33",
      });
    }
  };
  const handleBtnCancel = (event) => {
    history.goBack();
  };

  return (
    <Fragment>
      <div className={style["cards-product"]}>
        <div className="container">
          <div className="row">
            <div className={style.formData}>
              <label htmlFor="name">Name :</label>
              <br />
              <input
                id="name"
                type="text"
                name="name"
                value={insertProduct.name}
                placeholder="Type product name min. 50 characters."
                onChange={handleFormChange}
              ></input>

              <label htmlFor="price">Price :</label>
              <br />
              <input
                id="price"
                type="number"
                name="price"
                value={insertProduct.price}
                placeholder="Type the price"
                onChange={handleFormChange}
              ></input>

              <label htmlFor="description">Description :</label>
              <br />
              <input
                id="description"
                type="text"
                name="description"
                value={insertProduct.description}
                placeholder="Describe your product min. 150 characters."
                onChange={handleFormChange}
              ></input>

              <label htmlFor="description">Input product size :</label>
              <p className={style.textSize}>
                Write size you want to use for this product
              </p>
              <input
                id="size"
                type="text"
                name="size"
                value={insertProduct.size}
                placeholder="X, L, XL, 250 gr, 300 gr, etc."
                onChange={handleFormChange}
              ></input>

              <label htmlFor="description">Input delivery methods :</label>
              <p className={style.textSize}>
                Write methods you want to use for this product
              </p>
              <input
                id="deliveryMethod"
                type="text"
                name="deliveryMethod"
                value={insertProduct.deliveryMethod}
                placeholder="Home Delvery, Dine In, Take Away, etc."
                onChange={handleFormChange}
              ></input>

              <Button
                title={!loading ? "Save Product" : "Please wait..."}
                btn="btn-save"
                onClick={handleSubmit}
              />
              <Button
                title="Cancel"
                btn="btn-cancel"
                onClick={handleBtnCancel}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AsideRight;
