import React, { Fragment, useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import style from "./asideleft.module.css";
import Button from "../Button/ButtonEditProduct";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductProcess } from "../../../configs/redux/actions/productAdmin";
import Swal from "sweetalert2";
const AsideLeft = (props) => {
  const location = useLocation();
  const id = location.state.id;
  const hiddenFileInput = React.useRef(null);
  const { getProduct } = useSelector((state) => state.productAdmin);
  const ImgUrl = process.env.REACT_APP_API_IMG;
  const dispatch = useDispatch();
  const history = useHistory();
  const [imageDisplay, setImageDisplay] = useState(
    `${ImgUrl}${getProduct.image}`
  );

  const optionsCategory = [
    {
      label: "Add-on",
      value: "4",
    },
    {
      label: "Foods",
      value: "3",
    },
    {
      label: "Non-Coffee",
      value: "2",
    },
    {
      label: "Coffee",
      value: "1",
    },
  ];
  const handleChangeUpdate = (event) => {
    dispatch({
      type: "ONCHANGE_GET_PRODUCT",
      action: (getProduct[event.target.name] = event.target.value),
    });
  };
  const onChangePicture = (event) => {
    setImageDisplay(URL.createObjectURL(event.target.files[0]));
    dispatch({
      type: "ONCHANGE_GET_PRODUCT",
      action: (getProduct.imageUpload = event.target.files[0]),
    });
  };

  const handleDeleteProduct = (event) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProductProcess(id))
          .then((res) => {
            Swal.fire({
              title: "Success!",
              text: res,
              icon: "success",
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
      }
    });
  };

  useEffect(() => {
    setImageDisplay(`${ImgUrl}${getProduct.image}`);
    // dispatch(getProductProcess(id));
  }, [ImgUrl, getProduct.image]);

  return (
    <Fragment>
      <div className={style["cards-profile"]}>
        <div className="container">
          <div className="row">
            <div className={style.asideLeft}>
              {/* <div className={style["big-circle"]}> */}
              <div className={style["product-box"]}>
                <img
                  className={style["img-product"]}
                  src={imageDisplay}
                  alt="ImgProduct"
                />
                {/* </div> */}
              </div>
              <div className={`mt-5 ${style.formData}`}>
                <input
                  type="file"
                  ref={hiddenFileInput}
                  className={`${style["input-image"]}`}
                  onChange={onChangePicture}
                />
              </div>

              <div className={`mt-5 ${style.formData}`}>
                <label className={style["label-product"]} htmlFor="name">
                  Edit delivery hour:
                </label>
                <br />
                <input
                  className={style["input-product-code"]}
                  id="startHour"
                  type="time"
                  name="hourStart"
                  placeholder="Edit stock here"
                  value={getProduct.hourStart}
                  onChange={handleChangeUpdate}
                ></input>
                <input
                  className={style["input-product-code"]}
                  id="startHour"
                  type="time"
                  name="hourEnd"
                  value={getProduct.hourEnd}
                  placeholder="Edit stock here"
                  onChange={handleChangeUpdate}
                ></input>
              </div>
              <div className={`mt-5 ${style.formData}`}>
                <label className={style["label-product"]} htmlFor="stock">
                  Edit stock:
                </label>
                <br />
                <input
                  className={style["input-product-code"]}
                  id="stock"
                  type="number"
                  name="stock"
                  value={getProduct.stock}
                  placeholder="Edit stock here"
                  onChange={handleChangeUpdate}
                ></input>
              </div>
            </div>
            <div className={`mt-5 ${style.formData}`}>
              <label className={style["label-product"]} htmlFor="stock">
                Edit Category:
              </label>
              <br />
              <select
                className={`${style["input-product-code"]}`}
                name="categoryID"
                onChange={handleChangeUpdate}
                value={getProduct.categoryID}
              >
                {optionsCategory.map((option, index) => (
                  <option
                    value={option.value}
                    selected
                    className={style["input-product-code"]}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
              <Button
                title="Delete Product"
                btn="btn-delete"
                onClick={handleDeleteProduct}
              />
            </div>

            {/* <div className="col-12 col-lg-6">
                                <p className={style["text-title-right"]}>Contact</p>

                                <label htmlFor="email">Email adress :</label>
                                <br />
                                <input
                                    id="email"
                                    type="text"
                                    name="email"
                                    placeholder="zulaikha@gmail.com"
                                ></input>




                            </div> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AsideLeft;
