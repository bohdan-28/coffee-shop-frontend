import React from "react";
import { Link } from "react-router-dom";

import style from "./forgot-password.module.css";
import Logo from "../../assets/images/logo.png";
import Facebook from "../../assets/images/facebook.png";
import Twitter from "../../assets/images/twitter.png";
import Instagram from "../../assets/images/instagram.png";

export default function index() {
  return (
    <div>
      <main>
        <section className={style["auth"]}></section>
        <aside className={[["m-5"], style["auth"]].join(" ")}>
          <div className="d-flex justify-content-center">
            <div>
              <img src={Logo} alt="LogoCoffee" width="30" />
            </div>
            <div className="mt-2 ml-3">
              <p className={style["coffee"]}>Coffee Shop</p>
            </div>
          </div>
          <div
            className={[["text-center"], style["forgot-password"]].join(" ")}
          >
            <h1>Forgot your password?</h1>
            <p>Don’t worry, we got your back!</p>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <form className="mt-5">
              <div className="form-group">
                <input
                  type="email"
                  className={[
                    ["form-control mt-1"],
                    style["form-control"],
                  ].join(" ")}
                  name="email"
                  id="email"
                  placeholder="Enter your email adress to get link"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className={[["mt-4 btn"], style["btn-auth"]].join(" ")}
                >
                  Send
                </button>
              </div>
              <div className={[["text-center"], style["time"]].join(" ")}>
                <p>Click here if you didn’t receive any link in 2 minutes</p>
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
