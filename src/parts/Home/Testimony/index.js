import React from 'react'
import Style from './testimony.module.css'

function Testimony() {
  return (
    <div>
      <div class={[['jumbotron'], ['jumbotron-fluid'], Style['jumbotron-testimony']].join(' ')}>
        <div class="container">
          <h4 className={Style['testimony-title']}>Loved by Thousands of Happy Customer</h4>
          <h5 className={Style['testimony-teks']}>These are the stories of our customers who have visited us with great pleasure.</h5>
          <div className="row">
            <div className="col">
              <div className={Style['testimony-box']}>
                <div className={Style['img-testi-1']}></div>
                <h5 className={Style['user-name']}>Viezh Robert</h5>
                <h5 className={Style['user-from']}>Warsaw, Poland</h5>
                <p className={Style['user-review']}>“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>
                <div className={Style['img-star']}></div>
                <h5 className={Style['star-number']}>4.5</h5>
              </div>
            </div>
            <div className="col">
              <div className={Style['testimony-box']}>
                <div className={Style['img-testi-2']}></div>
                <h5 className={Style['user-name']}>Yessica Cristy</h5>
                <h5 className={Style['user-from']}>Shanxi, China</h5>
                <p className={Style['user-review']}>“I like it because I like to travel far and still can make my day better just by drinking their Hazelnut Latte</p>
                <div className={Style['img-star']}></div>
                <h5 className={Style['star-number']}>4.5</h5>
              </div>
            </div>
            <div className="col">
              <div className={Style['testimony-box']}>
               <div className={Style['img-testi-3']}></div>
               <h5 className={Style['user-name']}>Kim Joung Ju</h5>
               <h5 className={Style['user-from']}>Seoul, Korea</h5>
               <p className={Style['user-review']}>“This is very unusual for my taste, I haven’t liked coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town!</p>
               <div className={Style['img-star']}></div>
               <h5 className={Style['star-number']}>4.5</h5>
              </div>
            </div>
          </div>

          <div className={Style['pagination-left']}></div>
          <div className={Style['pagination-right']}></div>
          
          <div className={Style['pagination-button']}></div>
          <div className={Style['pagination-circle']}></div>
          <div className={Style['pagination-circle-2']}></div>
          <div className={Style['pagination-circle-3']}></div>
        </div>
      </div>

      

      <div className={Style['card-check-promo']}>
        <h4 className={Style['promo-title']}>Check our promo today!</h4>
        <h5 className={Style['promo-teks']}>Let's see the deals and pick yours!</h5>
        <button type="button" className={Style['btn-promo']}>See Promo</button>
      </div>
    </div>
  )
}

export default Testimony
