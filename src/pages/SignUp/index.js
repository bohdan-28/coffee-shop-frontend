import { React, useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUp, verify } from "../../configs/redux/actions/user";
import Swal from "sweetalert2";

import style from "./signup.module.css";
import Logo from "../../assets/images/logo.png";
import Google from "../../assets/images/google.png";
import Facebook from "../../assets/images/facebook.png";
import Twitter from "../../assets/images/twitter.png";
import Instagram from "../../assets/images/instagram.png";

export default function Index() {
  const history = useHistory();

  const useQuery = () => new URLSearchParams(useLocation().search);

  const query = useQuery();
  let email = query.get("email");
  let token = query.get("token");

  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.user);

  const [data, setData] = useState({
    email: "",
    password: "",
    phoneNumber: "",
    username: "your username",
    firstname: "your firstname",
    lastname: "your lastname",
    address: "your address",
    gender: "male",
    dateOfBirth: new Date(),
  });

  const handleFormChange = (event) => {
    const dataNew = { ...data };
    dataNew[event.target.name] = event.target.value;
    setData(dataNew);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signUp(data))
      .then((res) => {
        setData({
          email: "",
          password: "",
          phoneNumber: "",
          firstname: "your firstname",
          lastname: "your lastname",
          address: "your address",
          gender: "male",
          dateOfBirth: new Date(),
        });
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

  const handleClickLogin = () => {
    history.push("/login");
  };

  useEffect(() => {
    if (email !== null && token !== null) {
      dispatch(verify(email, token))
        .then((res) => {
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
    }
  }, [dispatch, email, token, history]);

  return (
    <main>
      <section className={style["auth"]}></section>
      <aside className={[["m-5"], style["auth"]].join(" ")}>
        <div className="d-flex">
          <div>
            <img src={Logo} alt="LogoCoffee" width="30" />
          </div>
          <div className="mt-2 ml-3">
            <p className={style["coffee"]}>Coffee Shop</p>
          </div>
          <div className="ml-auto mr-5">
            <Link to="/sign-up" className={style["auth"]}>
              Sign Up
            </Link>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
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
                value={data.email}
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
                value={data.password}
                onChange={handleFormChange}
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="phoneNumber">Phone Number :</label>
              <input
                type="text"
                className={[["form-control mt-1"], style["form-control"]].join(
                  " "
                )}
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Enter your phone number"
                value={data.phoneNumber}
                onChange={handleFormChange}
              />
            </div>
            <button
              type="submit"
              className={[["mt-4 btn"], style["btn-auth"]].join(" ")}
              onClick={handleSubmit}
            >
              {!loading ? "Sign Up" : "Please wait..."}
            </button>
            <button
              type="submit"
              className={[
                ["btn d-flex align-items-center justify-content-center mt-4"],
                style["btn-google"],
              ].join(" ")}
            >
              <img src={Google} alt="Google" width="27" />
              <span className="ml-2">Sign up with google</span>
            </button>
            <div className="d-flex mt-5 mb-4">
              <hr />
              <p className={[["mx-1"], style["already"]].join(" ")}>
                Already have an account?
              </p>
              <hr />
            </div>
            <button
              type="submit"
              className={[["btn"], style["btn-auth-here"]].join(" ")}
              onClick={() => handleClickLogin()}
            >
              Login Here
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
