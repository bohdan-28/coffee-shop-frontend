import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import style from "./asideright.module.css";
import Button from "../Button/ButtonEditProduct";
import { updateProductProcess } from "../../../configs/redux/actions/productAdmin";
const AsideRight = (props) => {
  const { getProduct } = useSelector((state) => state.productAdmin);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const id = location.state.id;
  const handleChangeUpdate = (event) => {
    dispatch({
      type: "ONCHANGE_GET_PRODUCT",
      action: (getProduct[event.target.name] = event.target.value),
    });
  };
  const handleCancel = (event) => {
    history.goBack();
  };

  const handleUpdateProduct = () => {
    const data = {
      name: getProduct.name,
      price: getProduct.price,
      stock: getProduct.stock,
      description: getProduct.description,
      size: getProduct.size,
      deliveryMethod: getProduct.deliveryMethod,
      hourStart: getProduct.hourStart,
      hourEnd: getProduct.hourEnd,
      categoryID: getProduct.categoryID,
    };
    dispatch(updateProductProcess(id, data))
      .then((res) => {
        Swal.fire({
          title: "Success!",
          text: res,
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#ffba33",
        });
        history.goBack();
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
  };
  console.log(getProduct);
  return (
    <Fragment>
      <div className={style["cards-product"]}>
        <div className="container">
          <div className="row">
            <div className={style.formData}>
              <label htmlFor="name">Edit name :</label>
              <br />
              <input
                id="name"
                type="text"
                name="name"
                value={getProduct.name}
                onChange={handleChangeUpdate}
                placeholder="Beef Spagehetti"
              ></input>

              <label htmlFor="price">Price :</label>
              <br />
              <input
                id="price"
                type="number"
                name="price"
                value={getProduct.price}
                onChange={handleChangeUpdate}
                placeholder="70.000"
              ></input>

              <label htmlFor="description">Edit description :</label>
              <br />
              <input
                id="description"
                type="text"
                name="description"
                value={getProduct.description}
                onChange={handleChangeUpdate}
                placeholder="Beef spagheti tapi gambar minuman"
              ></input>

              <label htmlFor="size">Edit product size :</label>
              <p className={style.textSize}>
                Change size you want to edit for this product
              </p>
              <input
                id="size"
                type="text"
                name="size"
                value={getProduct.size}
                onChange={handleChangeUpdate}
                placeholder="L, XL, 250 gr, 300 gr"
              ></input>

              <label htmlFor="deliveryMethod">Edit delivery methods :</label>
              <p className={style.textSize}>
                Change methods you want to use for this product
              </p>
              <input
                id="deliveryMethod"
                type="text"
                name="deliveryMethod"
                value={getProduct.deliveryMethod}
                onChange={handleChangeUpdate}
                placeholder="Home Delivery, Dine In, Take Away"
              ></input>
              <Button
                title="Save Edited Product"
                btn="btn-save"
                onClick={handleUpdateProduct}
              />
              <Button title="Cancel" btn="btn-cancel" onClick={handleCancel} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AsideRight;
