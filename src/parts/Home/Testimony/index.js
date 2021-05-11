import React from "react";
import Style from "./testimony.module.css";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";

function Testimony() {
  return (
    <div>
      <div
        className={[
          ["jumbotron"],
          ["jumbotron-fluid"],
          Style["jumbotron-testimony"],
        ].join(" ")}
      >
        <div className="container">
          <h4 className={Style["testimony-title"]}>
            Loved by Thousands of Happy Customer
          </h4>
          <h5 className={Style["testimony-teks"]}>
            These are the stories of our customers who have visited us with
            great pleasure.
          </h5>

          {/* ========= AWAL CARD REVIEW ===== */}
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                {/* <img className="d-block w-100" src="../../" alt="First slide"/> */}
                <div className="row" aria-label="First slide">
                  <div className="col">
                    <div className={Style["testimony-box"]}>
                      <div className={Style["img-testi-1"]}></div>
                      <h5 className={Style["user-name"]}>Viezh Robert</h5>
                      <h5 className={Style["user-from"]}>Warsaw, Poland</h5>
                      <p className={Style["user-review"]}>
                        “Wow... I am very happy to spend my whole day here. the
                        Wi-fi is good, and the coffee and meals tho. I like it
                        here!! Very recommended!
                      </p>
                      <div className={Style["img-star"]}></div>
                      <h5 className={Style["star-number"]}>4.5</h5>
                    </div>
                  </div>
                  <div className="col">
                    <div className={Style["testimony-box"]}>
                      <div className={Style["img-testi-2"]}></div>
                      <h5 className={Style["user-name"]}>Yessica Cristy</h5>
                      <h5 className={Style["user-from"]}>Shanxi, China</h5>
                      <p className={Style["user-review"]}>
                        “I like it because I like to travel far and still can
                        make my day better just by drinking their Hazelnut Latte
                      </p>
                      <div className={Style["img-star"]}></div>
                      <h5 className={Style["star-number"]}>4.5</h5>
                    </div>
                  </div>
                  <div className="col">
                    <div className={Style["testimony-box"]}>
                      <div className={Style["img-testi-3"]}></div>
                      <h5 className={Style["user-name"]}>Kim Joung Ju</h5>
                      <h5 className={Style["user-from"]}>Seoul, Korea</h5>
                      <p className={Style["user-review"]}>
                        “This is very unusual for my taste, I haven’t liked
                        coffee before but their coffee is the best! and yup, you
                        have to order the chicken wings, the best in town!
                      </p>
                      <div className={Style["img-star"]}></div>
                      <h5 className={Style["star-number"]}>4.5</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                {/* <img className="d-block w-100" src="..." alt="Second slide"/> */}
                <div className="row" aria-label="Second slide">
                  <div className="col">
                    <div className={Style["testimony-box"]}>
                      <div className={Style["img-testi-1"]}></div>
                      <h5 className={Style["user-name"]}>Viezh Robert</h5>
                      <h5 className={Style["user-from"]}>Warsaw, Poland</h5>
                      <p className={Style["user-review"]}>
                        “Wow... I am very happy to spend my whole day here. the
                        Wi-fi is good, and the coffee and meals tho. I like it
                        here!! Very recommended!
                      </p>
                      <div className={Style["img-star"]}></div>
                      <h5 className={Style["star-number"]}>4.5</h5>
                    </div>
                  </div>
                  <div className="col">
                    <div className={Style["testimony-box"]}>
                      <div className={Style["img-testi-2"]}></div>
                      <h5 className={Style["user-name"]}>Yessica Cristy</h5>
                      <h5 className={Style["user-from"]}>Shanxi, China</h5>
                      <p className={Style["user-review"]}>
                        “I like it because I like to travel far and still can
                        make my day better just by drinking their Hazelnut Latte
                      </p>
                      <div className={Style["img-star"]}></div>
                      <h5 className={Style["star-number"]}>4.5</h5>
                    </div>
                  </div>
                  <div className="col">
                    <div className={Style["testimony-box"]}>
                      <div className={Style["img-testi-3"]}></div>
                      <h5 className={Style["user-name"]}>Kim Joung Ju</h5>
                      <h5 className={Style["user-from"]}>Seoul, Korea</h5>
                      <p className={Style["user-review"]}>
                        “This is very unusual for my taste, I haven’t liked
                        coffee before but their coffee is the best! and yup, you
                        have to order the chicken wings, the best in town!
                      </p>
                      <div className={Style["img-star"]}></div>
                      <h5 className={Style["star-number"]}>4.5</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                {/* <img className="d-block w-100" src="..." alt="Third slide"/> */}
                <div className="row" aria-label="Second slide">
                  <div className="col">
                    <div className={Style["testimony-box"]}>
                      <div className={Style["img-testi-1"]}></div>
                      <h5 className={Style["user-name"]}>Viezh Robert</h5>
                      <h5 className={Style["user-from"]}>Warsaw, Poland</h5>
                      <p className={Style["user-review"]}>
                        “Wow... I am very happy to spend my whole day here. the
                        Wi-fi is good, and the coffee and meals tho. I like it
                        here!! Very recommended!
                      </p>
                      <div className={Style["img-star"]}></div>
                      <h5 className={Style["star-number"]}>4.5</h5>
                    </div>
                  </div>
                  <div className="col">
                    <div className={Style["testimony-box"]}>
                      <div className={Style["img-testi-2"]}></div>
                      <h5 className={Style["user-name"]}>Yessica Cristy</h5>
                      <h5 className={Style["user-from"]}>Shanxi, China</h5>
                      <p className={Style["user-review"]}>
                        “I like it because I like to travel far and still can
                        make my day better just by drinking their Hazelnut Latte
                      </p>
                      <div className={Style["img-star"]}></div>
                      <h5 className={Style["star-number"]}>4.5</h5>
                    </div>
                  </div>
                  <div className="col">
                    <div className={Style["testimony-box"]}>
                      <div className={Style["img-testi-3"]}></div>
                      <h5 className={Style["user-name"]}>Kim Joung Ju</h5>
                      <h5 className={Style["user-from"]}>Seoul, Korea</h5>
                      <p className={Style["user-review"]}>
                        “This is very unusual for my taste, I haven’t liked
                        coffee before but their coffee is the best! and yup, you
                        have to order the chicken wings, the best in town!
                      </p>
                      <div className={Style["img-star"]}></div>
                      <h5 className={Style["star-number"]}>4.5</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link
              className={[Style["pagination-left"]]}
              to="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="sr-only">Previous</span>
            </Link>
            <Link
              className={Style["pagination-right"]}
              to="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="sr-only">Next</span>
            </a>
          </div>
          <div className={Style["pagination-button"]}></div>
          {/*======== AKHIR CARD REVIEW ========= */}

          {/* <div className="row">
            <div className="col">
              <div className={Style["testimony-box"]}>
                <div className={Style["img-testi-1"]}></div>
                <h5 className={Style["user-name"]}>Viezh Robert</h5>
                <h5 className={Style["user-from"]}>Warsaw, Poland</h5>
                <p className={Style["user-review"]}>
                  “Wow... I am very happy to spend my whole day here. the Wi-fi
                  is good, and the coffee and meals tho. I like it here!! Very
                  recommended!
                </p>
                <div className={Style["img-star"]}></div>
                <h5 className={Style["star-number"]}>4.5</h5>
              </div>
            </div>
            <div className="col">
              <div className={Style["testimony-box"]}>
                <div className={Style["img-testi-2"]}></div>
                <h5 className={Style["user-name"]}>Yessica Cristy</h5>
                <h5 className={Style["user-from"]}>Shanxi, China</h5>
                <p className={Style["user-review"]}>
                  “I like it because I like to travel far and still can make my
                  day better just by drinking their Hazelnut Latte
                </p>
                <div className={Style["img-star"]}></div>
                <h5 className={Style["star-number"]}>4.5</h5>
              </div>
            </div>
            <div className="col">
              <div className={Style["testimony-box"]}>
                <div className={Style["img-testi-3"]}></div>
                <h5 className={Style["user-name"]}>Kim Joung Ju</h5>
                <h5 className={Style["user-from"]}>Seoul, Korea</h5>
                <p className={Style["user-review"]}>
                  “This is very unusual for my taste, I haven’t liked coffee
                  before but their coffee is the best! and yup, you have to
                  order the chicken wings, the best in town!
                </p>
                <div className={Style["img-star"]}></div>
                <h5 className={Style["star-number"]}>4.5</h5>
              </div>
            </div>
          </div> */}

          {/* <nav>
            <ul className="pagination">
              <li className="page-item">
                <Link className={[ Style['pagination-left']]} to="#" aria-label="Previous">
                  <span className="sr-only"></span>
                </Link>
              </li>
              <li className="page-item"><Link className={[['page-link'], Style['pagination-circle']].join(' ')} to="#"></Link></li>
              <li className="page-item"><Link className={[['page-link'], Style['pagination-circle-2']].join(' ')} to="#"></Link></li>
              <li className="page-item"><Link className={[['page-link'], Style['pagination-circle-3']].join(' ')} to="#"></Link></li>
              <li className="page-item">
                <Link className={Style['pagination-right']} to="#" aria-label="Next">
                  <span className="sr-only">Next</span>
                </Link>
              </li>
            </ul>
          </nav> 
          <div className={Style['pagination-button']}></div> */}
        </div>
      </div>

      <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
        data-aos-delay="3"
        data-aos-once="true"
        className={Style["card-check-promo"]}
      >
        <h4 className={Style["promo-title"]}>Check our promo today!</h4>
        <h5 className={Style["promo-teks"]}>
          Let's see the deals and pick yours!
        </h5>
        <button type="button" className={Style["btn-promo"]}>
          See Promo
        </button>
      </div>
    </div>
  );
}

export default Testimony;
