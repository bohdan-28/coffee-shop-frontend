import { React, Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import style from "./ProductDetail.module.css";
import style2 from "./CardDelivery.module.css";
import style3 from "./aside.module.css";
import style4 from "./CardCheckout.module.css";
import Button from "./Button/Button";
import { getProductById } from "../../configs/redux/actions/product";
import { getUser } from "../../configs/redux/actions/user";
import { insertCart } from "../../configs/redux/actions/cart";
import Swal from "sweetalert2";

export default function DetailProduct(props) {
  const ImgUrl = process.env.REACT_APP_API_IMG;

  const history = useHistory();

  const dispatch = useDispatch();

  const [count, setCount] = useState(0);
  const [cart] = useState([]);
  const [size, setSize] = useState(null);
  const [delivery, setDelivery] = useState(null);
  const [dataTime, setDataTime] = useState("");

  const { product } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.user);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    return count;
  };

  const handleClickFavourite = () => {
    history.push("/product-cust");
  };

  const handleClickTitle = () => {
    const id = props.idUser;
    history.push(`/product-detail/${id}`);
  };

  const handleClickStaff = () => {
    Swal.fire({
      title: "Info!",
      text: "This feature is comming soon!",
      icon: "info",
      confirmButtonText: "Ok",
      confirmButtonColor: "#ffba33",
    });
  };

  const handleClickCart = () => {
    if (count === 0) {
      Swal.fire({
        title: "Info!",
        text: "Please add item amount!",
        icon: "info",
        confirmButtonText: "Ok",
        confirmButtonColor: "#ffba33",
      });
      setSize(null);
    } else {
      if (size === null) {
        Swal.fire({
          title: "Info!",
          text: "Please choose size!",
          icon: "info",
          confirmButtonText: "Ok",
          confirmButtonColor: "#ffba33",
        });
      } else {
        setCount(0);
        let tempCart = {
          size: size,
          amount: count,
        };
        if (cart.length > 0) {
          cart.map((data, index) => {
            if (data.size === size) {
              const spliceCart = cart.indexOf(data);
              cart.splice(spliceCart, 1);
              tempCart = {
                size: size,
                amount: data.amount + count,
              };
              cart.push(tempCart);
            } else {
              cart.push(tempCart);
            }
            return true;
          });
        } else {
          cart.push(tempCart);
        }
      }
    }
  };

  const handleChangeDelivery = (event) => {
    const data = event.target.value;
    setDelivery(data);
  };

  const handleClickSize = (params) => {
    setSize(params);
  };

  const handleChangeTime = (event) => {
    setDataTime(event.target.value);
  };

  const handleChangeNow = (event) => {
    if (event.target.value === "yes") {
      setDataTime(`${new Date().getHours()}:${new Date().getMinutes()}`);
    } else {
      setDataTime("");
    }
  };

  const routeChange = () => {
    if (cart.length < 1) {
      Swal.fire({
        title: "Info!",
        text: "Please add item!",
        icon: "info",
        confirmButtonText: "Ok",
        confirmButtonColor: "#ffba33",
      });
    } else {
      if (delivery === null || dataTime === "") {
        Swal.fire({
          title: "Info!",
          text: "Please choose delivery and time!",
          icon: "info",
          confirmButtonText: "Ok",
          confirmButtonColor: "#ffba33",
        });
      } else {
        const data = {
          userName: user.username,
          orderType: delivery,
          orderDetails: dataTime,
          orderPhone: user.phoneNumber,
          productName: product.name,
          productImage: product.image,
          price: product.price,
          cart: cart,
        };
        dispatch(insertCart(data)).then((res) => {
          Swal.fire({
            title: "Success!",
            text: res,
            icon: "success",
            confirmButtonText: "Ok",
            confirmButtonColor: "#ffba33",
          }).then((result) => {
            if (result.isConfirmed) {
              history.push("/payment-delivery", {
                cart: cart,
                price: product.price,
                idProduct: product.id,
              });
            } else {
              history.push("/payment-delivery", {
                cart: cart,
                price: product.price,
                idProduct: product.id,
              });
            }
          });
        });
      }
    }
  };

  useEffect(() => {
    const id = props.idUser;
    dispatch(getProductById(id));
    dispatch(getUser());
  }, [dispatch, props.idUser]);

  return (
    <Fragment>
      <div className="container">
        <div className={style["product-detail"]}>
          <p className={style["title-route"]}>
            <span
              className={style["favourite"]}
              onClick={() => handleClickFavourite()}
            >
              Favourite & Promo
            </span>{" "}
            <span className={style["title"]} onClick={() => handleClickTitle()}>
              {" "}
              / {product.name}{" "}
            </span>{" "}
          </p>
          <div className="row">
            <div className="col-lg-6 pt-5">
              <div className="container">
                <img
                  className={style2["img-product"]}
                  src={`${ImgUrl}${product.image}`}
                  alt="ProductImage"
                />
                <div className={style2["card-delivery"]}>
                  <p className={style2["title-card-delivery"]}>
                    Delivery and Time
                  </p>
                  <div
                    className={[
                      ["row"],
                      ["flex-nowrap"],
                      style2["div-flex"],
                    ].join(" ")}
                  >
                    <div className={style2["radio"]}>
                      <input
                        type="radio"
                        id="dineIn"
                        name="delivery"
                        value="Dine In"
                        onChange={handleChangeDelivery}
                      />
                      <label htmlFor="dineIn">Dine In</label>
                    </div>
                    <div className={style2["radio"]}>
                      <input
                        type="radio"
                        id="door"
                        name="delivery"
                        value="Door Delivery"
                        onChange={handleChangeDelivery}
                      />
                      <label htmlFor="door">Door Delivery</label>
                    </div>
                    <div className={style2["radio"]}>
                      <input
                        type="radio"
                        id="pickUp"
                        name="delivery"
                        value="Pick Up"
                        onChange={handleChangeDelivery}
                      />
                      <label htmlFor="pickUp">Pick Up</label>
                    </div>
                  </div>
                  <div
                    className={[
                      ["row"],
                      ["flex-nowrap"],
                      ["pt-5"],
                      style2["div-flex"],
                    ].join(" ")}
                  >
                    <p className={style2["subtitle-card-delivery"]}>Now</p>
                    <div className={style2["radio"]}>
                      <input
                        type="radio"
                        id="yes"
                        name="time"
                        value="yes"
                        onChange={handleChangeNow}
                      />
                      <label htmlFor="yes">Yes</label>
                    </div>
                    <div className={style2["radio"]}>
                      <input
                        type="radio"
                        id="no"
                        name="time"
                        value="no"
                        onChange={handleChangeNow}
                      />
                      <label htmlFor="no">No</label>
                    </div>
                  </div>
                  <div className="row flex-nowrap pt-5">
                    <p className={style2["subtitle-card-delivery"]}>Set time</p>
                    <input
                      id="time"
                      type="text"
                      name="time"
                      placeholder="Enter time for reservation"
                      value={dataTime}
                      onChange={handleChangeTime}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pt-5">
              <div className="container">
                <p className={style3["title-product"]}>{product.name}</p>
                <p className={style3["subtitle-product"]}>
                  {product.description}
                </p>
                <p className={style3["info-delivery"]}>
                  Delivery only on
                  <span>
                    {" "}
                    Monday to
                    <br /> Friday
                  </span>{" "}
                  at{" "}
                  <span>
                    {" "}
                    {product.hourStart} - {product.hourEnd}
                  </span>
                </p>
                <div className="d-flex pt-5 pb-5">
                  <Button title="-" btn="btn-minus" onClick={decrement} />
                  <Button title={count} btn="btn-number" />
                  <Button title="+" btn="btn-plus" onClick={increment} />
                  <p className={style3["text-price"]}>IDR {product.price}</p>
                </div>
                <Button
                  title="Add to Cart"
                  btn="btn-addCart"
                  onClick={() => handleClickCart()}
                />
                <Button
                  title="Ask a Staff"
                  btn="btn-askStaff"
                  onClick={() => handleClickStaff()}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className={style4.size}>
                  <p className={style4["title-size"]}>Choose size</p>
                  <div className="d-flex pl-5">
                    {product.size !== undefined &&
                      product.size.split(" ").map((data, index) => {
                        return (
                          <button
                            className={style4["circle-size"]}
                            key={index}
                            onClick={() => handleClickSize(data)}
                          >
                            {data}
                          </button>
                        );
                      })}
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className={style4.checkout}>
                  <div className="d-flex pb-4">
                    <img
                      className={style4["img-product"]}
                      src={`${ImgUrl}${product.image}`}
                      alt="ProductImage"
                    />
                    <div className="pl-5">
                      <p className={style4["title-checkout"]}>{product.name}</p>
                      {cart.length > 0 ? (
                        cart.map((data, index) => {
                          return (
                            <p
                              className={style4["subtitle-checkout"]}
                              key={index}
                            >
                              {`x${data.amount} (${data.size})`}
                            </p>
                          );
                        })
                      ) : (
                        <p className={style4["subtitle-checkout"]}>
                          Your cart is empty
                        </p>
                      )}
                    </div>
                    <p className={style4["title-btn-checkout"]}>Checkout</p>
                    <button
                      className={style4["circle-checkout"]}
                      onClick={routeChange}
                    >
                      <i className="fa fa-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
