import { React, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../configs/redux/actions/user";
import { searchProduct } from "../../configs/redux/actions/product";
import Swal from "sweetalert2";
import axios from "axios";

import Style from "./navbar.module.css";
import Card from "./productcard.module.css";
import { navchat, navsearch } from "../../assets/images";

function Navbar() {
  const Url = process.env.REACT_APP_API_URL;
  const ImgUrl = process.env.REACT_APP_API_IMG;

  const history = useHistory();

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const { searchProducts } = useSelector((state) => state.product);

  const [showResult, setShowResult] = useState(false);
  const [query, setQuery] = useState("");

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure you want to logout?",
      showDenyButton: true,
      confirmButtonText: `Logout!`,
      confirmButtonColor: "#6a4029",
      denyButtonText: "Cancel",
      denyButtonColor: `#ffba33`,
      focusDeny: true,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        history.push("/");
      } else {
        Swal.fire({
          title: "Logout canceled",
          text: "",
          icon: "info",
          confirmButtonText: "Ok",
          confirmButtonColor: "#6a4029",
        });
      }
    });
  };

  const handleClickSignUp = () => {
    history.push("/sign-up");
  };

  const handleFormChange = (event) => {
    setQuery(event.target.value);
    axios
      .get(`${Url}/products/?keyword=${event.target.value}&perPage=3`)
      .then((res) => {
        if (event.target.value === "") {
          setShowResult(false);
        } else {
          setShowResult(true);
        }
        dispatch(searchProduct(res.data.data));
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#6a4029",
        }).then((result) => {
          setShowResult(false);
          if (result.isConfirmed) {
            setQuery("");
          } else {
            setQuery("");
          }
        });
      });
  };

  const handleClickProduct = (id) => {
    history.push(`/product-detail/${id}`);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(getUser());
    }
  }, [dispatch]);

  const isAuthenticated = localStorage.getItem("token");

  if (!isAuthenticated) {
    return (
      <div>
        <nav
          className={[
            ["navbar"],
            ["navbar-expand-lg"],
            ["navbar-light"],
            Style["navbar-style"],
          ].join(" ")}
        >
          <div className="container">
            <Link className={Style["coffee-icon"]} to="/"></Link>
            <Link className={Style["navbar-brand"]} to="/">
              Coffee Shop
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav m-lg-auto ">
                <Link
                  className={[Style["nav-item"], ["active"]].join(" ")}
                  to="/"
                >
                  Home <span className="sr-only">(current)</span>
                </Link>
                <Link className={Style["nav-item"]} to="/product-cust">
                  Product
                </Link>
                <Link className={Style["nav-item"]} to="/">
                  Your Cart
                </Link>
                <Link className={Style["nav-item"]} to="/history">
                  History
                </Link>
              </div>
            </div>

            <Link className={Style["nav-signin"]} to="/login">
              Login
            </Link>
            <button
              type="button"
              className={[["btn"], Style["nav-btn-signup"]].join(" ")}
              onClick={() => handleClickSignUp()}
            >
              Sign Up
            </button>
          </div>
        </nav>
      </div>
    );
  }
  return (
    <div>
      <nav
        className={[
          ["navbar"],
          ["navbar-expand-lg"],
          ["navbar-light"],
          Style["navbar-style"],
        ].join(" ")}
      >
        <div className="container">
          <Link className={Style["coffee-icon"]} to="/"></Link>
          <Link className={Style["navbar-brand"]} to="/">
            Coffee Shop
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav m-lg-auto ">
              <Link
                className={[Style["nav-item"], ["active"]].join(" ")}
                to="/"
              >
                Home <span className="sr-only">(current)</span>
              </Link>
              <Link className={Style["nav-item"]} to="/product-cust">
                Product
              </Link>
              <Link className={Style["nav-item"]} to="/">
                Your Cart
              </Link>
              <Link className={Style["nav-item"]} to="/history">
                History
              </Link>
            </div>
          </div>
          <div
            className="modal fade"
            id="modalSearch"
            aria-labelledby="modalSearchLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="modalSearchLabel">
                    Search Product
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="productName">Product Name</label>
                      <input
                        type="productName"
                        className="form-control"
                        name="productName"
                        id="productName"
                        value={query}
                        onChange={handleFormChange}
                      />
                      {showResult === true && (
                        <div className="d-flex justify-content-between">
                          {searchProducts.map((data, index) => {
                            return (
                              <div
                                className={Card["card-disc"]}
                                key={index}
                                data-dismiss="modal"
                                onClick={() => handleClickProduct(data.id)}
                              >
                                <div className={Card.disc}></div>
                                <img
                                  src={`${ImgUrl}${data.image}`}
                                  alt="product"
                                />
                                <h4>{data.name}</h4>
                                <h5 className="pb-2">IDR {data.price}</h5>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="logined">
            <div className="row">
              <div className="col">
                <img
                  className={Style["navsearch"]}
                  src={navsearch}
                  alt="NavSearch"
                  data-toggle="modal"
                  data-target="#modalSearch"
                />
              </div>
              <div className="col">
                <Link to="/chat">
                  <img
                    className={Style["navchat"]}
                    src={navchat}
                    alt="NavChat"
                  />
                </Link>
              </div>
              <div className="col">
                <div
                  className=""
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {user.image ? (
                    <img
                      className={Style["profile-img"]}
                      src={`${ImgUrl}${user.image}`}
                      alt="ImgUser"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link
                    className={[["dropdown-item"], Style["dropdown-item"]].join(
                      " "
                    )}
                    to="/profile"
                  >
                    Profile
                  </Link>
                  <Link
                    onClick={handleLogout}
                    className={[["dropdown-item"], Style["dropdown-item"]].join(
                      " "
                    )}
                    to="#"
                  >
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
