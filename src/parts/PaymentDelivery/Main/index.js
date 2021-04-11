import React from 'react'
import style from './main.module.css'
import { checklistIcon, hazelnutlatte, paypallogo, truckicon, walleticon, visalogo } from '../../../assets/images/index'
import PaymentCard from '../PaymentCard'
import PaymentCardResp from '../PaymentCardResp/PaymentCardResp'

function Main() {
  return (
    <div>
      <div className={[['jumbotron'], ['jumbotron-fluid'], style['payment-bg']].join(' ')}>
        <div className="container-fluid">
          <div className={[["row"], style['row-resp']].join(' ')}>
            <div className={[['col-2'], style['circle-1']].join(' ')}>
              <div className={style[`circle-bg`]}>
                <img className={style[`checklist-icon`]} src={`${checklistIcon}`} alt="" />
              </div>
              <div className={style['order-line']}></div>
              <h5 className={style['titleline']}>Order</h5>
            </div>
            <div className={[['col-2'], style['circle-2']].join(' ')}>
              <div className={style[`circle-bg`]}>
                <img className={style[`checklist-icon`]} src={`${checklistIcon}`} alt="" />
              </div>
              <div className={style['order-line']}></div>
              <h5 className={style['titleline']}>Checkout</h5>
            </div>
            <div className={[['col-2'], style['circle-3']].join(' ')}>
              <div className={style[`circle-bg`]}>
                <div className={style[`checklist-icon-active`]}></div>
              </div>
              <h5 className={style['titleline']}>Payment</h5>
            </div>
          </div>
          <h5 className={style['title-checkout']}>Checkout your item now!</h5>

          <PaymentCard
            picture={`${hazelnutlatte}`}
            productname="Hazelnut Latte"
            qty="1"
            size="Large"
            price="24.000"
            subtotal="120.000"
            tax="20.000"
            shiping="10.000"
            total="150.000"
            address="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam fuga voluptatibus expedita ex sapiente, quidem necessitatibus deleniti debitis vel ullam, hic rem corrupti."
            phonenumber="+62 89523 2322"
            cardmethod="Credit Card"
            bankmethod="Bank Account"
            codmethod="Cash on Delivery"

          />


        </div>
      </div>
      <div className={style['head-payment']}>
        <div>
          <div className={style["pay-top"]}>
            <i class={style["arrow"]} />
            <h5>Payment</h5>
            <PaymentCardResp
              image={visalogo}
              title="Credit Card *******8789"
              desc="BERNARD WATSON"
              draw="circle" />
          </div>
          <div className={style["pay-bot"]}>
            <p>Choose another method</p>
            <PaymentCardResp
              image={walleticon}
              title="Credit or Debit card"
              desc="Pay with Visa or Mastercard"
              draw="arrow-right"
            />
            <PaymentCardResp
              image={truckicon}
              title="Cash on Delivery"
              desc="Pay when the food arrived"
              draw="arrow-right" />
            <PaymentCardResp
              image={paypallogo}
              title="Paypal"
              desc=""
              draw="arrow-right" />
          </div>
          <PaymentCard
            picture={`${hazelnutlatte}`}
            productname="Hazelnut Latte"
            qty="1"
            size="Large"
            price="24.000"
            subtotal="120.000"
            tax="20.000"
            shiping="10.000"
            total="150.000"
            address="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam fuga voluptatibus expedita ex sapiente, quidem necessitatibus deleniti debitis vel ullam, hic rem corrupti."
            phonenumber="+62 89523 2322"
            cardmethod="Credit Card"
            bankmethod="Bank Account"
            codmethod="Cash on Delivery"
          />
        </div>
      </div>
    </div>
  )
}

export default Main
