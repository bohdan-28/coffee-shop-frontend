import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import style from "./asideleft.module.css";
import Button from "../../../components/Button";
import { product } from "../../../assets/images";
// import { withRouter } from "react-router-dom";
// import { Link } from "react-router-dom";

const AsideLeft = (props) => {
  const hiddenFileInput = React.useRef(null);
  const dispatch = useDispatch();
  const [timeType1, setTimeType1] = useState("text");
  const [timeType2, setTimeType2] = useState("text");
  const [imgUrl, setImgUrl] = useState(product);

  const { insertProduct } = useSelector((state) => state.productAdmin);
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

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleTimeType1 = (e) => {
    setTimeType1("time");
  };
  const handleTimeType2 = (e) => {
    setTimeType2("time");
  };
  const handleFormChange = (event) => {
    // insertProduct[event.target.name] = event.target.value;
    dispatch({
      type: "ONCHANGE_INSERT_PRODUCT",
      action: (insertProduct[event.target.name] = event.target.value),
    });
  };

  const handleChangeImage = (event) => {
    setImgUrl(URL.createObjectURL(event.target.files[0]));
    dispatch({
      type: "ONCHANGE_INSERT_PRODUCT",
      action: (insertProduct.image = event.target.files[0]),
    });
    // insertProduct["image"] = event.target.files[0];
  };

  return (
    <Fragment>
      <div className={style["cards-profile"]}>
        <div className="container">
          <div className="row">
            <div className={style.asideLeft}>
              <div className={`${style["big-circle"]}`}>
                <img
                  className={`${style["img-product-valen"]}`}
                  ref={hiddenFileInput}
                  src={imgUrl}
                  alt="ImgProduct"
                />
              </div>

              <Button
                title="Take a picture"
                btn="btn-take-a-picture"
                color="blue"
                onClick={handleClick}
              />
              <Button
                title="Choose from gallery"
                btn="btn-choose-picture-high"
                color="yellow"
                onClick={handleClick}
              />

              <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleChangeImage}
                style={{ display: "none" }}
              />

              <p className={style.title}>Delivery Hour:</p>
              <input
                className={`${style["input-hour"]} ${style["smoke-white"]}`}
                type={timeType1}
                name="hourStart"
                onClick={handleTimeType1}
                onChange={handleFormChange}
                value={insertProduct.hourStart}
                placeholder="Select start hour"
              />
              <input
                className={`${style["input-hour"]} ${style["smoke-white"]}`}
                type={timeType2}
                name="hourEnd"
                value={insertProduct.hourEnd}
                onClick={handleTimeType2}
                onChange={handleFormChange}
                placeholder="Select end hour"
              />
              <p className={style.title}>Input Stock:</p>
              <input
                className={`${style["input-hour"]} ${style["smoke-white"]}`}
                type="number"
                name="stock"
                value={insertProduct.stock}
                onChange={handleFormChange}
                placeholder="Input Stock"
              />
              <p className={style.title}>Category:</p>
              <select
                className={`${style["input-hour"]} ${style["smoke-white"]}`}
                name="categoryID"
                onChange={handleFormChange}
              >
                {optionsCategory.map((option, index) => (
                  <option value={option.value} selected className="color2">
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
