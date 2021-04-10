import React, { Fragment } from "react";
import style from "./asideleft.module.css";
import Button from "../../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { hazelnutlatte } from "../../../assets/images";
import { Link } from "react-router-dom";

const AsideLeft = (props) => {
  const hiddenFileInput = React.useRef(null);
  const { getProduct } = useSelector((state) => state.productAdmin);
  const ImgUrl = process.env.REACT_APP_API_IMG;
  const dispatch = useDispatch();
  const handleClick = (e) => {
    hiddenFileInput.current.click();
  };
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
                  src={`${ImgUrl}${getProduct.image}`}
                  alt="ImgProduct"
                />
                {/* </div> */}

                <Button
                  title=" "
                  btn="btn-edit-pict"
                  color="blue"
                  onClick={handleClick}
                />
              </div>

              <input
                type="file"
                ref={hiddenFileInput}
                onChange={props.changePicture}
                style={{ display: "none" }}
              />

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
                className={`${style.formData}`}
                name="categoryID"
                onChange={handleChangeUpdate}
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
