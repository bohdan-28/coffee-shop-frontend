import { React, Fragment, useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { activate, reset } from "../../configs/redux/actions/user";
import Swal from "sweetalert2";

import style from "./forgot-password.module.css";
import Logo from "../../assets/images/logo.png";
import Facebook from "../../assets/images/facebook.png";
import Twitter from "../../assets/images/twitter.png";
import Instagram from "../../assets/images/instagram.png";
import BgMobile from "../../assets/images/bgForgotMobile.png";


export default function Index() {
  const useQuery = () => new URLSearchParams(useLocation().search);

  const query = useQuery();
  let email = query.get("email");
  let token = query.get("token");

  const dispatch = useDispatch();

  const history = useHistory();

  const { loading } = useSelector((state) => state.user);

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [step, setStep] = useState("send");

  const handleFormChange = (event) => {
    const dataNew = { ...data };
    dataNew[event.target.name] = event.target.value;
    setData(dataNew);
  };

  const handleSend = (event) => {
    event.preventDefault();
    dispatch(activate(data))
      .then((res) => {
        setData({
          email: "",
          password: "",
        });
        setStep("reset");
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
  };

  const handleReset = (event) => {
    event.preventDefault();
    if (email !== null && token !== null) {
      dispatch(reset(email, token, data))
        .then((res) => {
          setData({
            email: "",
            password: "",
          });
          Swal.fire({
            title: "Success!",
            text: res,
            icon: "success",
            confirmButtonText: "Ok",
            confirmButtonColor: "#ffba33",
          }).then((result) => {
            if (result.isConfirmed) {
              history.push("/login");
            } else {
              history.push("/login");
            }
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
      Swal.fire({
        title: "Error!",
        text: "Something wrong",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#6a4029",
      });
    }
  };

  useEffect(() => {
    if (email !== null && token !== null) {
      setStep("reset");
    }
  }, [dispatch, email, token]);

  return (
    <div>
      <main className={style.forgot}>
        <section className={style["auth-forgots"]}></section>
        <aside className={[["m-5"], style["auth-forgot"]].join(" ")}>
          <div className="d-flex justify-content-center">
            <div>
              <img className={style.logoCoffe} src={Logo} alt="LogoCoffee" width="30" />
            </div>
            <div className="mt-2 ml-3">
              <p className={style["coffee"]}>Coffee Shop</p>
            </div>
          </div>

          <div className={[["text-center"], style["forgot-password"]].join(" ")}>
            <h1>Forgot your password?</h1>
            <p>Don’t worry, we got your back!</p>
          </div>
          <img className={style.bgMobile} src={BgMobile} alt="LogoCoffee" />

          <div className="d-flex justify-content-center mt-3">
            <form className="mt-5">
              <div className="form-group">
                {step === "send" && (
                  <input
                    type="email"
                    className={[
                      ["form-control mt-1"],
                      style["form-control"],
                    ].join(" ")}
                    name="email"
                    id="email"
                    value={data.email}
                    placeholder="Enter your email address to get link"
                    onChange={handleFormChange}
                  />
                )}
                {step === "reset" && (
                  <input
                    type="password"
                    className={[
                      ["form-control mt-1"],
                      style["form-control"],
                    ].join(" ")}
                    name="password"
                    id="password"
                    value={data.password}
                    placeholder="Enter your new password"
                    onChange={handleFormChange}
                  />
                )}
              </div>
              <div>
                {step === "send" && (
                  <button
                    type="submit"
                    className={[["mt-4 btn"], style["btn-auth"]].join(" ")}
                    onClick={handleSend}
                  >
                    {!loading ? "Send" : "Please wait..."}
                  </button>
                )}
                {step === "reset" && (
                  <button
                    type="submit"
                    className={[["mt-4 btn"], style["btn-auth"]].join(" ")}
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                )}
              </div>
              {step === "send" && (
                <Fragment>
                  <div className={[["text-center"], style["time"]].join(" ")}>
                    <p>
                      Click here if you didn’t receive any link in 2 minutes
                    </p>
                    <span>01:52</span>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className={[["btn"], style["btn-auth-here"]].join(" ")}
                    >
                      Resend Link
                    </button>
                  </div>
                </Fragment>
              )}
            </form>
          </div>
          <div className={[["d-flex"], style["footer-auth"]].join(" ")}>
            <div className={[["d-flex"], style["logo-footer"]].join(" ")}>
              <div>
                <img src={Logo} alt="LogoFooter" width="30" />
              </div>
              <div>
                <p className={[["mt-2 ml-3"], style["coffee-shop"]].join(" ")}>
                  Coffee Shop
                </p>
                <p className={style["detail"]}>
                  Coffee Shop is a store that sells some <br />
                  good meals, and especially coffee. We <br />
                  provide high quality beans
                </p>
                <div className={style["social"]}>
                  <img src={Facebook} alt="Facebook" width="70" />
                  <img src={Twitter} alt="Twitter" width="70" />
                  <img src={Instagram} alt="Instagram" width="70" />
                </div>
                <p className={style["copyright"]}>©2020CoffeeStore</p>
              </div>
            </div>
            <div
              className={[["d-flex flex-column"], style["detail-footer"]].join(
                " "
              )}
            >
              <div className="d-flex">
                <p className={[["nav-link"], style["product"]].join(" ")}>
                  Product
                </p>
                <nav className="nav flex-column">
                  <Link className="nav-link" to="#">
                    Download
                  </Link>
                  <Link className="nav-link" to="#">
                    Locations
                  </Link>
                  <Link className="nav-link" to="#">
                    Blog
                  </Link>
                </nav>
                <nav className="nav flex-column">
                  <Link className="nav-link" to="#">
                    Pricing
                  </Link>
                  <Link className="nav-link" to="#">
                    Countries
                  </Link>
                </nav>
              </div>
              <div className="d-flex">
                <p className={[["nav-link"], style["engage"]].join(" ")}>
                  Engage
                </p>
                <nav className="nav flex-column">
                  <Link className="nav-link" to="#">
                    Coffe Shop ?
                  </Link>
                  <Link className="nav-link" to="#">
                    FAQ
                  </Link>
                  <Link className="nav-link" to="#">
                    Terms of Service
                  </Link>
                </nav>
                <nav className="nav flex-column">
                  <Link className="nav-link" to="#">
                    About Us
                  </Link>
                  <Link className="nav-link" to="#">
                    Privacy Policy
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
