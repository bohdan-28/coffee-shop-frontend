import React, {useState} from "react";
import Style from "./favorite.module.css";
import FavoriteProduct from './FavoriteProduct'
import Promo from './Promo'
import LeftScrollProduct from './LeftScrollProduct'
import LeftScrollPromo from './LeftScrollPromo'
import { hazelnutlatte } from "../../../assets/images";


function PeopleFavorite() {
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
          <h4 className={Style["favorite-title"]}>Here is People's Favorite</h4>
          <p className={Style["favorite-description"]}>
            Let’s choose and have a bit taste of poeple’s favorite. It might be
            yours too!
          </p>
          
          {/*======== Mobile ONLY ======== */}
          <div className="favorite-product-list">
            <h4 className={Style["title-mobile"]}>A good coffee is <br/> a good day</h4>
            <p className={Style['favorite-teks-mobile']}>Favorite Products</p>
            <button className={Style['seemore']} onClick={()=>setShow(!show)} >See more</button>
              <>
              {show ? 
                <FavoriteProduct 
                  img={`${hazelnutlatte}`}
                  productname="Coffee Whipped Cream"
                  price="IDR 44.000"
                /> 
                : 
                <LeftScrollProduct 
                  img={`${hazelnutlatte}`}
                  productname="Hazelnut Latte"
                  price="IDR 25.000"
                />
              }
              </>
          </div>
          <div className="promo-for-you">
            <p className={Style['favorite-teks-mobile']}>Promo for you</p>
            <button className={Style['seemore']} onClick={()=>setShowPromo(!showPromo)} >See more</button>
              <>
              {showPromo ? 
                <Promo 
                 imgproduct={`${hazelnutlatte}`}
                 productname="Coffee Whipped Cream"
                 pricewithdisc="24.000"
                 normalprice="44.000"
                /> 
                : 
                <LeftScrollPromo 
                  imgproduct={`${hazelnutlatte}`}
                  productname="Coffee Whipped Cream"
                  pricewithdisc="24.000"
                /> 
              } 
              </>
          </div>
          {/*======= TUTUP MOBILE ONLY======== */}



          <div className={[['row'], Style['product-list']].join(' ')}>
            <div className="col">
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
            <div className="col">
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
            <div className="col">
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
