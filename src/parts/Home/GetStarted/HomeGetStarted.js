import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import Style from "./home.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup'

function HomeGetStarted() {
  const history = useHistory();

  const handleClickStarted = () => {
    history.push("/login");
  };

  const handleClickStartedProduct = () => {
    history.push("/product-cust");
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

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
          {localStorage.getItem("token") ? (
            <button
              type="button"
              className={[
                ["btn"],
                ["btn-warning"],
                Style["btn-get-started"],
              ].join(" ")}
              onClick={() => handleClickStartedProduct()}
            >
              Get Started
            </button>
          ) : (
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
          )}
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-delay="0"
            data-aos-once="true"
            className={Style["card-staff-store"]}>
            <div className={Style["card-shadow"]}></div>
            <div className="row">
              <div className="col-lg-4">
                <div className={Style["icon-user"]}></div>
                <h5 className={Style["staff-quantity"]}>
                  <CountUp delay={3} end={90} duration={8} />
                </h5>
                <h5 className={Style["staff-title"]}>Staff</h5>
                <div className={Style["vertical-line"]}></div>
              </div>
              <div className="col-lg-4">
                <div className={Style["icon-store"]}></div>
                <h5 className={Style["staff-quantity"]}>
                  <CountUp delay={3} end={30} duration={8} />

                </h5>
                <h5 className={Style["staff-title"]}>Stores</h5>
                <div className={Style["vertical-line"]}></div>
              </div>
              <div className="col-lg-4">
                <div className={Style["icon-customer"]}></div>
                <h5 className={Style["staff-quantity"]}>
                  <CountUp delay={3} end={800} duration={8} />

                </h5>
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
