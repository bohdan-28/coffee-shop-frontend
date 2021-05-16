import React, { useState, useEffect } from "react";
import Style from "./favorite.module.css";
import FavoriteProduct from './FavoriteProduct'
import Promo from './Promo'
import LeftScrollProduct from './LeftScrollProduct'
import LeftScrollPromo from './LeftScrollPromo'
import { hazelnutlatte } from "../../../assets/images";
import AOS from 'aos';
import 'aos/dist/aos.css';

function PeopleFavorite() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const [show, setShow] = useState(false)
  const [showPromo, setShowPromo] = useState(false)
  return (
    <div>
      <div
        className={[
          ["jumbotron"],
          ["jumbotron-fluid"],
          Style["jumbotron-favorite"],
        ].join(" ")}
      >
        <div className={[['container'], Style['mobile-contain']].join(' ')}>
          <h4 data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-delay="0"
            data-aos-once="true" className={Style["favorite-title"]}>Here is People's Favorite</h4>
          <p data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-delay="0"
            data-aos-once="true"
            className={Style["favorite-description"]}>
            Let’s choose and have a bit taste of poeple’s favorite. It might be
            yours too!
          </p>

          {/*======== Mobile ONLY ======== */}
          <div className="favorite-product-list">
            <h4 className={Style["title-mobile"]}>A good coffee is <br /> a good day</h4>
            <p className={Style['favorite-teks-mobile']}>Favorite Products</p>
            <button className={Style['seemore']} onClick={() => setShow(!show)} >See more</button>
            <>
              {show ?
                <FavoriteProduct/>
                :
                <LeftScrollProduct/>
              }
            </>
          </div>
          <div className="promo-for-you">
            <p className={Style['favorite-teks-mobile']}>Promo for you</p>
            <button className={Style['seemore']} onClick={() => setShowPromo(!showPromo)} >See more</button>
            <>
              {showPromo ?
                <Promo/>
                :
                <LeftScrollPromo/>
              }
            </>
          </div>
          {/*======= TUTUP MOBILE ONLY======== */}



          <div className={[['row'], Style['product-list']].join(' ')}>
            <div
              data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-easing="ease-in-out"
              data-aos-delay="3"
              data-aos-once="true"
              className="col">
              <div className={Style["favorite-product"]}>
                <div className={Style["img-product"]}></div>
                <h5 className={Style["product-title"]}>Hazelnut Latte</h5>
                {/* Topping */}
                <div className={Style["icon-checklist"]}></div>
                <h5 className={Style["product-top"]}>HazelnutSyrup</h5>
                <div className={Style["icon-checklist"]}></div>
                <h5 className={Style["product-top"]}>Wanilla Whipped Cream</h5>
                <div className={Style["icon-checklist"]}></div>
                <h5 className={Style["product-top"]}>Ice / Hot</h5>
                <div className={Style["icon-checklist"]}></div>
                <h5 className={Style["product-top"]}>Sliced Banana on Top</h5>
                {/* Akhir Topping */}
                <h3 className={Style["product-price"]}>IDR 25.000</h3>
                <button
                  type="button"
                  className={[["btn"], Style["btn-product"]].join(" ")}
                >
                  Order Now
                </button>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-easing="ease-in-out"
              data-aos-delay="6"
              data-aos-once="true"
              className="col">
              <div className={Style["favorite-product"]}>
                <div className={Style["img-product-2"]}></div>
                <h5 className={Style["product-title"]}>Pinky Promise</h5>
                {/* Topping */}
                <div className={Style["icon-checklist"]}></div>
                <h5 className={Style["product-top"]}>1 Shot of Coffee</h5>
                <div className={Style["icon-checklist"]}></div>
                <h5 className={Style["product-top"]}>Vanilla Whipped Cream</h5>
                <div className={Style["icon-checklist"]}></div>
                <h5 className={Style["product-top"]}>Chocolate Biscuits</h5>
                <div className={Style["icon-checklist"]}></div>
                <h5 className={Style["product-top"]}>Strawberry Syrup</h5>
                <div className={Style["icon-checklist"]}></div>
                <h5 className={Style["product-top"]}>
                  Sliced strawberry on Top
                </h5>
                {/* Akhir Topping */}
                <h3 className={Style["product-price"]}>IDR 30.000</h3>
                <button
                  type="button"
                  className={[["btn"], Style["btn-product"]].join(" ")}
                >
                  Select
                </button>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="3000"
              data-aos-easing="ease-in-out"
              data-aos-delay="9"
              data-aos-once="true"
              className="col">
              <div className={Style["favorite-product"]}>
                <div className={Style["img-product-3"]}></div>
                <h5 className={Style["product-title"]}>Chicken Wings</h5>
                {/* Topping */}
                <div className={Style["icon-checklist"]}></div>
                <h5 className={Style["product-top"]}>Wings</h5>
                <div className={Style["icon-checklist"]}></div>
                <h5 className={Style["product-top"]}>Drum Sticks</h5>
                <div className={Style["icon-checklist"]}></div>
                <h5 className={Style["product-top"]}>Mayonaise and Lemon</h5>
                <div className={Style["icon-checklist"]}></div>
                <h5 className={Style["product-top"]}>Hot Fried</h5>
                <div className={Style["icon-checklist"]}></div>
                <h5 className={Style["product-top"]}>Secret Recipe</h5>
                <div className={Style["icon-checklist"]}></div>
                <h5 className={Style["product-top"]}>
                  Buy 1 Get 1 only for Dine in
                </h5>
                {/* Akhir Topping */}
                <h3 className={Style["product-price"]}>IDR 40.000</h3>
                <button
                  type="button"
                  className={[["btn"], Style["btn-product-2"]].join(" ")}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PeopleFavorite;
