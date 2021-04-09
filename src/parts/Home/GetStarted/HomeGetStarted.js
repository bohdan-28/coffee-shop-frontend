import React from "react";
import { useHistory } from "react-router-dom";

import Style from "./home.module.css";

function HomeGetStarted() {
  const history = useHistory();

  const handleClickStarted = () => {
    history.push("/login");
  };

  return (
    <div>
      <div
        className={[
          ["jumbotron"],
          ["jumbotron-fluid"],
          Style["jumbotron-get-started"],
        ].join(" ")}
      >
        <div className="container">
          <h4 className={Style["home-title"]}>
            Start Your Day with Coffee and Good Meals
          </h4>
          <h5 className={Style["home-teks"]}>
            We provide high quality beans, good taste, and healthy meals made by
            love just for you. Start your day with us for a bigger smile!
          </h5>
          <button
            type="button"
            className={[
              ["btn"],
              ["btn-warning"],
              Style["btn-get-started"],
            ].join(" ")}
            onClick={() => handleClickStarted()}
          >
            Get Started
          </button>

          <div className={Style["card-staff-store"]}>
            <div className={Style["card-shadow"]}></div>
            <div className="row">
              <div className="col-lg-4">
                <div className={Style["icon-user"]}></div>
                <h5 className={Style["staff-quantity"]}>90+</h5>
                <h5 className={Style["staff-title"]}>Staff</h5>
                <div className={Style["vertical-line"]}></div>
              </div>
              <div className="col-lg-4">
                <div className={Style["icon-store"]}></div>
                <h5 className={Style["staff-quantity"]}>30+</h5>
                <h5 className={Style["staff-title"]}>Stores</h5>
                <div className={Style["vertical-line"]}></div>
              </div>
              <div className="col-lg-4">
                <div className={Style["icon-customer"]}></div>
                <h5 className={Style["staff-quantity"]}>800+</h5>
                <h5 className={Style["staff-title"]}>Customers</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeGetStarted;
