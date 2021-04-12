import React from "react";
import Style from "./visitstore.module.css";
import "aos/dist/aos.css";

function VisitStore() {
  return (
    <div>
      <div
        className={[
          ["jumbotron"],
          ["jumbotron-fluid"],
          Style["jumbotron-visit-store"],
        ].join(" ")}
      >
        <div className="container">
          <h4
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-delay="3"
            data-aos-once="true"
            className={Style["visit-store-title"]}
          >
            Visit Our Store in the Spot on the Map Below
          </h4>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-delay="3"
            data-aos-once="true"
            className={Style["visit-store-teks"]}
          >
            See our store in every city on the spot and spen your good day
            there. See you soon!
          </p>
          <div
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-easing="ease-in-out"
            data-aos-delay="6"
            data-aos-once="true"
            className={Style["visit-store-img"]}
          ></div>
          <h4 className={Style["partner-title"]}>Our Partner</h4>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-delay="3"
            data-aos-once="true"
            className="row"
          >
            <div className="col">
              <div className={Style["img-partner-1"]}></div>
            </div>
            <div className="col">
              <div className={Style["img-partner-2"]}></div>
            </div>
            <div className="col">
              <div className={Style["img-partner-3"]}></div>
            </div>
            <div className="col">
              <div className={Style["img-partner-4"]}></div>
            </div>
            <div className="col">
              <div className={Style["img-partner-5"]}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisitStore;
