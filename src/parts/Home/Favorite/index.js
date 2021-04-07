import React from 'react'
import Style from './favorite.module.css'

function PeopleFavorite() {
  return (
    <div>
      <div className={[['jumbotron'], ['jumbotron-fluid'], Style['jumbotron-favorite']].join(' ')}>
        <div className="container">
          <h4 className={Style['favorite-title']} >Here is People's Favorite</h4>
          <p className={Style['favorite-description']}>Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>

          <div className="row">
            <div className="col">
              <div className={Style['favorite-product']}>
                <div className={Style['img-product']}></div>
                <h5 className={Style['product-title']}>Hazelnut Latte</h5>
                {/* Topping */}
                <div className={Style['icon-checklist']}></div>
                <h5 className={Style['product-top']}>HazelnutSyrup</h5>
                <div className={Style['icon-checklist']}></div>
                <h5 className={Style['product-top']}>Wanilla Whipped Cream</h5>
                <div className={Style['icon-checklist']}></div>
                <h5 className={Style['product-top']}>Ice / Hot</h5>
                <div className={Style['icon-checklist']}></div>
                <h5 className={Style['product-top']}>Sliced Banana on Top</h5>
                {/* Akhir Topping */}
                <h3 className={Style['product-price']}>IDR 25.000</h3>
                <button type="button" class={[['btn'], Style['btn-product']].join(' ')}>Order Now</button>
              </div>
            </div>
            <div className="col">
              <div className={Style['favorite-product']}>
                <div className={Style['img-product-2']}></div>
                <h5 className={Style['product-title']}>Pinky Promise</h5>
                {/* Topping */}
                <div className={Style['icon-checklist']}></div>
                <h5 className={Style['product-top']}>1 Shot of Coffee</h5>
                <div className={Style['icon-checklist']}></div>
                <h5 className={Style['product-top']}>Vanilla Whipped Cream</h5>
                <div className={Style['icon-checklist']}></div>
                <h5 className={Style['product-top']}>Chocolate Biscuits</h5>
                <div className={Style['icon-checklist']}></div>
                <h5 className={Style['product-top']}>Strawberry Syrup</h5>
                <div className={Style['icon-checklist']}></div>
                <h5 className={Style['product-top']}>Sliced strawberry on Top</h5>
                {/* Akhir Topping */}
                <h3 className={Style['product-price']}>IDR 30.000</h3>
                <button type="button" class={[['btn'], Style['btn-product']].join(' ')}>Select</button>
              </div>
            </div>
            <div className="col">
              <div className={Style['favorite-product']}>
                <div className={Style['img-product-3']}></div>
                <h5 className={Style['product-title']}>Chicken Wings</h5>
                {/* Topping */}
                <div className={Style['icon-checklist']}></div>
                <h5 className={Style['product-top']}>Wings</h5>
                <div className={Style['icon-checklist']}></div>
                <h5 className={Style['product-top']}>Drum Sticks</h5>
                <div className={Style['icon-checklist']}></div>
                <h5 className={Style['product-top']}>Mayonaise and Lemon</h5>
                <div className={Style['icon-checklist']}></div>
                <h5 className={Style['product-top']}>Hot Fried</h5>
                <div className={Style['icon-checklist']}></div>
                <h5 className={Style['product-top']}>Secret Recipe</h5>
                <div className={Style['icon-checklist']}></div>
                <h5 className={Style['product-top']}>Buy 1 Get 1 only for Dine in</h5>
                {/* Akhir Topping */}
                <h3 className={Style['product-price']}>IDR 40.000</h3>
                <button type="button" class={[['btn'], Style['btn-product-2']].join(' ')}>Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PeopleFavorite
