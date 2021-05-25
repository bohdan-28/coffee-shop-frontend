import { React, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../configs/redux/actions/user";
import Swal from "sweetalert2";

import style from "./login.module.css";
import Logo from "../../assets/images/logo.png";
import Google from "../../assets/images/google.png";
import Facebook from "../../assets/images/facebook.png";
import Twitter from "../../assets/images/twitter.png";
import Instagram from "../../assets/images/instagram.png";

export default function Index() {
  const history = useHistory();

  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (event) => {
    const dataNew = { ...data };
    dataNew[event.target.name] = event.target.value;
    setData(dataNew);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(data))
      .then((res) => {
        Swal.fire({
          title: "Success!",
          text: res,
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#ffba33",
        }).then((result) => {
          if (result.isConfirmed) {
            history.push("/");
          } else {
            history.push("/");
          }
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err,
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#6a4029",
        });
      });
  };

  const handleClickSignUp = () => {
    history.push("/sign-up");
  };

  return (
    <main>
      <section className={style["auth-logins"]}></section>
      <aside className={[["m-5"], style["auth-login"]].join(" ")}>
        <div className="d-flex">
          <div>
            <img className={style.logoCoffe} src={Logo} alt="LogoCoffee" width="30" />
          </div>
          <div className="mt-2 ml-3">
            <p className={style["coffee"]}>Coffee Shop</p>
          </div>
          <div className="ml-auto mr-5">
            <Link to="/login" className={style["auth"]}>
              Login
            </Link>
          </div>
        </div>
        <div
          className={[
            ["d-flex justify-content-center"],
            style["form-container"],
          ].join(" ")}
        >
          <form className="mt-5">
            <div className="form-group">
              <label htmlFor="email">Email Address :</label>
              <input
                type="email"
                className={[["form-control mt-1"], style["form-control"]].join(
                  " "
                )}
                name="email"
                id="email"
                placeholder="Enter your email adress"
                onChange={handleFormChange}
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="password">Password :</label>
              <input
                type="password"
                className={[["form-control mt-1"], style["form-control"]].join(
                  " "
                )}
                name="password"
                id="password"
                placeholder="Enter your password"
                onChange={handleFormChange}
              />
            </div>
            <div>
              <Link to="/forgot-password" className={style["forgot"]}>
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              className={[["mt-5 btn"], style["btn-auth"]].join(" ")}
              onClick={handleSubmit}
            >
              Login
            </button>
            <button
              type="submit"
              className={[
                ["btn d-flex align-items-center justify-content-center mt-4"],
                style["btn-google"],
              ].join(" ")}
            >
              <img src={Google} alt="Google" width="27" />
              <span className="ml-2">Login with google</span>
            </button>
            <div className="d-flex mt-5 mb-4">
              <hr />
              <p className={[["mx-1"], style["already"]].join(" ")}>
                Don’t have an account?
              </p>
              <hr />
            </div>
            <button
              type="submit"
              className={[["btn"], style["btn-auth-here"]].join(" ")}
              onClick={() => handleClickSignUp()}
            >
              Sign up Here
            </button>
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
  );
}
