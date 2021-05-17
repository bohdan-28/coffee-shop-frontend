import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, withRouter, useHistory } from "react-router-dom";
import { getUser } from "../../../configs/redux/actions/user";
import { getUserCart, insertOrder } from "../../../configs/redux/actions/cart";
import Swal from "sweetalert2";

import style from "./main.module.css";
import style2 from "./paymentcard.module.css";
import style3 from "./paymentcardresp.module.css";
import {
  checklistIcon,
  paypallogo,
  truckicon,
  walleticon,
  visalogo,
  bankpayment,
  cardpayment,
  codpayment,
} from "../../../assets/images/index";

function Main(props) {
  const ImgUrl = process.env.REACT_APP_API_IMG;

  const dispatch = useDispatch();
  const history = useHistory();

  const stateCart = props.location.state.cart;
  const price = props.location.state.price;
  const idProduct = props.location.state.idProduct;

  let totalAmount = 0;
  stateCart.map((data, index) => {
    return (totalAmount += data.amount);
  });

  const { user } = useSelector((state) => state.user);
  const { cart, failed } = useSelector((state) => state.cart);

  const [subTotal] = useState(totalAmount * price);
  const [tax] = useState(20000);
  const [shipping] = useState(10000);
  const [total] = useState(totalAmount * price + (tax + shipping));
  const [payment, setPayment] = useState(null);
  const [arrCart] = useState([]);

  const handleClickPayment = (event) => {
    const data = event.target.getAttribute("data-content");
    setPayment(data);
    Swal.fire({
      title: "Success!",
      text: "Success",
      icon: "success",
      confirmButtonText: "Ok",
      confirmButtonColor: "#ffba33",
    });
  };
  const handleClickConfirm = () => {
    if (payment === null) {
      Swal.fire({
        title: "Error!",
        text: "Please choose payment method",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#6a4029",
      });
    } else {
      const data = {
        arrOrders: stateCart,
        arrCart: arrCart,
        idProduct: idProduct,
        idUser: user.id,
        userName: user.username,
        orderType: cart[0].orderType,
        orderDetails: cart[0].orderDetails,
        orderPhone: cart[0].orderPhone,
        paymentType: payment,
        total: total,
        qty: totalAmount,
        productName: cart[0].productName,
        productImage: cart[0].productImage,
        price: price,
      };
      dispatch(insertOrder(data)).then((res) => {
        Swal.fire({
          title: "Success!",
          text: res,
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#ffba33",
        }).then((result) => {
          if (result.isConfirmed) {
            history.push("/history");
          } else {
            history.push("/history");
          }
        });
      });
    }
  };

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);


  useEffect(() => {
    if (user.username !== undefined) {
      dispatch(getUserCart(user.username))

    }

  }, [dispatch, user.username]);

  useEffect(() => {
    if (failed === true) {
      Swal.fire(
        'Already ordered?',
        'You need to order something berfore do payment',
        'please comeback again :)'
      ).then((result)=>{
        if (result.isConfirmed) {
          history.push("/product-cust");
        }
      })
    }
  }, [failed])

  return (
    <>
      <div
        className={[
          ["jumbotron"],
          ["jumbotron-fluid"],
          style["payment-bg"],
        ].join(" ")}
      >
        <div className="container-fluid">
          <div className={[["row"], style["row-resp"]].join(" ")}>
            <div className={[["col-2"], style["circle-1"]].join(" ")}>
              <div className={style[`circle-bg`]}>
                <img
                  className={style[`checklist-icon`]}
                  src={`${checklistIcon}`}
                  alt=""
                />
              </div>
              <div className={style["order-line"]}></div>
              <h5 className={style["titleline"]}>Order</h5>
            </div>
            <div className={[["col-2"], style["circle-2"]].join(" ")}>
              <div className={style[`circle-bg`]}>
                <img
                  className={style[`checklist-icon`]}
                  src={`${checklistIcon}`}
                  alt=""
                />
              </div>
              <div className={style["order-line"]}></div>
              <h5 className={style["titleline"]}>Checkout</h5>
            </div>
            <div className={[["col-2"], style["circle-3"]].join(" ")}>
              <div className={style[`circle-bg`]}>
                <div className={style[`checklist-icon-active`]}></div>
              </div>
              <h5 className={style["titleline"]}>Payment</h5>
            </div>
          </div>
          <h5 className={style["title-checkout"]}>Checkout your item now!</h5>
          <div className={[style["row-resp-1"], ["row"]].join(" ")}>
            <div className="col">
              <div className={style2["order-card"]}>
                <h5 className={style2["title-sum"]}>Order Summary</h5>
                <div className={style2["carts-content-overflow"]}>
                  {cart.map((data, index) => {
                    arrCart.push(data.id);
                    return (
                      <div className="row mb-lg-5" key={index}>
                        <div className={[["col"], style2["column"]].join(" ")}>
                          <img src={`${ImgUrl}${data.productImage}`} alt="" />
                        </div>
                        <div
                          className={[["col"], style2["column-title"]].join(" ")}
                        >
                          <h5 className={style2["product-name"]}>
                            {data.productName}
                          </h5>
                          <h5 className={style2["qty"]}>x {data.amount}</h5>
                          <h5 className={style2["size"]}>{data.size}</h5>
                        </div>
                        <div className="col">
                          <h5 className={style2["price"]}>IDR {data.price}</h5>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className={style2["bottom-detail"]}>
                  <div className={style2["line"]}></div>
                  <div className="row">
                    <div className="col">
                      <div className={style2["payment-title"]}>
                        <h6>SUBTOTAL</h6>
                        <h6>TAX & FEES </h6>
                        <h6>SHIPING</h6>
                      </div>
                    </div>
                    <div className="col">
                      <div className={style2["payment-value"]}>
                        <h6>IDR {subTotal}</h6>
                        <h6>IDR {tax}</h6>
                        <h6>IDR {shipping}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <h4 className={style2["total"]}>Total</h4>
                    </div>
                    <div className="col">
                      <h4 className={style2["total-price"]}>IDR {total}</h4>
                    </div>
                  </div>
                </div>
                <div className={style2["btn-com-pay"]}>
                  <h3>Complete Payment </h3>
                </div>
              </div>
            </div>
            <div
              className={[
                ["col"],
                ["ml-lg-5"],
                ["mt-lg-5"],
                style2["body-resp"],
              ].join(" ")}
            >
              <div className="row">
                <div className="col">
                  <h4 className={style2["address-title"]}>Address Details</h4>
                  {/* <Link className={style2["edit-address"]} to="/edit">
                    edit
                  </Link> */}
                  <div className={style2["card-address"]}>
                    <h5 className={style2["deliver-teks"]}>Delivery to</h5>
                    <h5 className={style2["address"]}>{user.address}</h5>
                    <h5 className={style2["phone"]}>{user.phoneNumber}</h5>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h4 className={style2["payment-title"]}>Payment Method</h4>
                  <div className={style2["card-payment"]}>
                    <div className="row">
                      <button
                        type="button"
                        className={style2["btn-card-payment"]}
                        data-content="Credit Card"
                        onClick={(event) => handleClickPayment(event)}
                      >
                        <img
                          src={cardpayment}
                          alt=""
                          data-content="Credit Card"
                          onClick={(event) => handleClickPayment(event)}
                        />
                        <h5
                          data-content="Credit Card"
                          onClick={(event) => handleClickPayment(event)}
                        >
                          Credit Card
                        </h5>
                      </button>
                    </div>
                    <div className="row">
                      <button
                        type="button"
                        className={style2["btn-card-payment"]}
                        data-content="Bank Account"
                        onClick={(event) => handleClickPayment(event)}
                      >
                        <img
                          src={bankpayment}
                          alt=""
                          data-content="Bank Account"
                          onClick={(event) => handleClickPayment(event)}
                        />
                        <h5
                          data-content="Bank Account"
                          onClick={(event) => handleClickPayment(event)}
                        >
                          Bank Account
                        </h5>
                      </button>
                    </div>
                    <div className="row">
                      <button
                        type="button"
                        className={style2["btn-card-payment"]}
                        data-content="Cash on Delivery"
                        onClick={(event) => handleClickPayment(event)}
                      >
                        <img
                          src={codpayment}
                          alt=""
                          data-content="Cash on Delivery"
                          onClick={(event) => handleClickPayment(event)}
                        />
                        <h5
                          data-content="Cash on Delivery"
                          onClick={(event) => handleClickPayment(event)}
                        >
                          Cash on Delivery
                        </h5>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className={[["btn"], style2["btn-confirm-pay"]].join(" ")}
                onClick={() => handleClickConfirm()}
              >
                Confirm and Pay
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={style["head-payment"]}>
        <div>
          <div className={style["pay-top"]}>
            <i className={style["arrow"]} />
            <h5>Payment</h5>
            <div className={style3.card}>
              <img src={visalogo} alt="" />
              <div className={style3["card-title"]}>
                <p className={style3.ptitle}>Credit Card *******8789</p>
                <p>BERNARD WATSON</p>
              </div>
              <div className={style3["circle"]}></div>
            </div>
          </div>
          <div className={style["pay-bot"]}>
            <p>Choose another method</p>
            <div className={style3.card}
              data-content="Credit Card"
              onClick={(event) => handleClickPayment(event)}
            >
              <img src={walleticon} alt=""
                data-content="Credit Card"
                onClick={(event) => handleClickPayment(event)} />
              <div className={style3["card-title"]}
                data-content="Credit Card"
                onClick={(event) => handleClickPayment(event)}>
                <p className={style3.ptitle}
                  data-content="Credit Card"
                  onClick={(event) => handleClickPayment(event)}>Credit or Debit card</p>
                <p
                  data-content="Credit Card"
                  onClick={(event) => handleClickPayment(event)}>Pay with Visa or Mastercard</p>
              </div>
              <div className={style3["arrow-right"]}
                data-content="Credit Card"
                onClick={(event) => handleClickPayment(event)}></div>
            </div>
            <div className={style3.card}
              data-content="Cash on Delivery"
              onClick={(event) => handleClickPayment(event)}>
              <img src={truckicon} alt=""
                data-content="Cash on Delivery"
                onClick={(event) => handleClickPayment(event)} />
              <div className={style3["card-title"]}
                data-content="Cash on Delivery"
                onClick={(event) => handleClickPayment(event)}>
                <p className={style3.ptitle}
                  data-content="Cash on Delivery"
                  onClick={(event) => handleClickPayment(event)}>Cash on Delivery</p>
                <p
                  data-content="Cash on Delivery"
                  onClick={(event) => handleClickPayment(event)}>Pay when the food arrived</p>
              </div>
              <div className={style3["arrow-right"]}
                data-content="Cash on Delivery"
                onClick={(event) => handleClickPayment(event)}></div>
            </div>
            <div className={style3.card}
              data-content="Bank Account"
              onClick={(event) => handleClickPayment(event)}
            >
              <img src={paypallogo} alt=""
                data-content="Bank Account"
                onClick={(event) => handleClickPayment(event)} />
              <div className={style3["card-title"]}
                data-content="Bank Account"
                onClick={(event) => handleClickPayment(event)}>
                <p className={style3.ptitle}
                  data-content="Bank Account"
                  onClick={(event) => handleClickPayment(event)}>Paypal</p>
                <p></p>
              </div>
              <div className={style3["arrow-right"]}
                data-content="Bank Account"
                onClick={(event) => handleClickPayment(event)}></div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className={style2["order-card"]}>
                <h5 className={style2["title-sum"]}>Order Summary</h5>
                <div className={style2["or-display-none"]}>
                  {cart.map((data, index) => {
                    arrCart.push(data.id);
                    return (
                      <div className="row mb-lg-5" key={index}>
                        <div className={[["col"], style2["column"]].join(" ")}>
                          <img src={`${ImgUrl}${data.productImage}`} alt="" />
                        </div>
                        <div
                          className={[["col"], style2["column-title"]].join(" ")}
                        >
                          <h5 className={style2["product-name"]}>
                            {data.productName}
                          </h5>
                          <h5 className={style2["qty"]}>x {data.amount}</h5>
                          <h5 className={style2["size"]}>{data.size}</h5>
                        </div>
                        <div className="col">
                          <h5 className={style2["price"]}>IDR {data.price}</h5>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className={style2["bottom-detail"]}>
                  {cart.map((data, index) => {

                    arrCart.push(data.id);
                    return (
                      <div className={[["row"], ["mb-lg-5"], style2["card-cart"]].join(" ")} key={index}>
                        <div className={[["col"], style2["column"]].join(" ")}>
                          <img src={`${ImgUrl}${data.productImage}`} alt="" />
                        </div>
                        <div
                          className={[["col"], style2["column-title"]].join(" ")}
                        >
                          <h5 className={style2["product-name"]}>
                            {data.productName}
                          </h5>
                          <h5 className={style2["qty"]}>x {data.amount}</h5>
                          <h5 className={style2["size"]}>{data.size}</h5>
                        </div>
                        <div className="col">
                          <h5 className={style2["price"]}>IDR {data.price}</h5>
                        </div>
                      </div>
                    );
                  })}
                  <div className={style2["line"]}></div>
                  <div className="row">
                    <div className="col">
                      <div className={style2["payment-title"]}>
                        <h6>SUBTOTAL </h6>
                        <h6>TAX & FEES </h6>
                        <h6>SHIPING</h6>
                      </div>
                    </div>
                    <div className="col">
                      <div className={style2["payment-value"]}>
                        <h6>IDR {subTotal}</h6>
                        <h6>IDR {tax}</h6>
                        <h6>IDR {shipping}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <h4 className={style2["total"]}>Total</h4>
                    </div>
                    <div className="col">
                      <h4 className={style2["total-price"]}>IDR {total}</h4>
                    </div>
                  </div>
                </div>
                <div className={style2["btn-com-pay"]} onClick={() => handleClickConfirm()}>
                  <h3>Complete Payment</h3>
                </div>
              </div>
            </div>
            <div
              className={[
                ["col"],
                ["ml-lg-5"],
                ["mt-lg-5"],
                style2["body-resp"],
              ].join(" ")}
            >
              <div className="row">
                <div className="col">
                  <h4 className={style2["address-title"]}>Address Details</h4>
                  <Link className={style2["edit-address"]} to="/edit">
                    edit
                  </Link>
                  <div className={style2["card-address"]}>
                    <h5 className={style2["deliver-teks"]}>Delivery to</h5>
                    <h5 className={style2["address"]}>{user.address}</h5>
                    <h5 className={style2["phone"]}>{user.phoneNumber}</h5>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h4 className={style2["payment-title"]}>Payment Method</h4>
                  <div className={style2["card-payment"]}>
                    <div className="row">
                      <button
                        type="button"
                        className={style2["btn-card-payment"]}
                      >
                        <img src={cardpayment} alt="" />
                        <h5>Credit Card</h5>
                      </button>
                    </div>
                    <div className="row">
                      <button
                        type="button"
                        className={style2["btn-card-payment"]}
                      >
                        <img src={bankpayment} alt="" />
                        <h5>Bank Account</h5>
                      </button>
                    </div>
                    <div className="row">
                      <button
                        type="button"
                        className={style2["btn-card-payment"]}
                      >
                        <img src={codpayment} alt="" />
                        <h5>Cash on Delivery</h5>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className={[["btn"], style2["btn-confirm-pay"]].join(" ")}
              >
                Confirm and Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Main);
