import React from 'react'
import {Link} from 'react-router-dom'
import style from './paymentcard.module.css'
import {bankpayment, cardpayment, codpayment} from '../../../assets/images/index'

function PaymentCard({picture, productname, qty, size, price, subtotal, tax, shiping, total, address, phonenumber, cardmethod, bankmethod, codmethod }) {
  return (
    <div>
      <div className="row">
          <div className="col">
            {/* Awal Order Sumarry */}
            <div className={style['order-card']}>
              <h5 className={style['title-sum']} >Order Summarry</h5>
              <div className="row mb-lg-5">
                <div className="col">
                <img src={picture} alt=""/>
                </div>
                <div className="col">
                  <h5 className={style['product-name']}>{productname}</h5>
                  <h5 className={style['qty']}>x {qty}</h5>
                  <h5 className={style['size']}>{size}</h5>
                </div>
                <div className="col">
                <h5 className={style['price']}>IDR {price}</h5>
                </div>
              </div>

              <div className="row mb-lg-5">
                <div className="col">
                <img src={picture} alt=""/>
                </div>
                <div className="col">
                  <h5 className={style['product-name']}>{productname}</h5>
                  <h5 className={style['qty']}>x {qty}</h5>
                  <h5 className={style['size']}>{size}</h5>
                </div>
                <div className="col">
                <h5 className={style['price']}>IDR {price}</h5>
                </div>
              </div>

              <div className={style['bottom-detail']}>
                <div className={style['line']}></div>
                <div className="row">
                  <div className="col">
                    <div className={style['payment-title']}>
                      <h6 >SUBTOTAL</h6>
                      <h6 >TAX & FEES </h6>
                      <h6 >SHIPING</h6>
                    </div>
                  </div>
                  <div className="col">
                    <div className={style['payment-value']}>
                      <h6 >IDR {subtotal}</h6>
                      <h6 >IDR {tax} </h6>
                      <h6 >IDR {shiping}</h6>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h4 className={style['total']}>Total</h4>
                  </div>
                  <div className="col">
                    <h4 className={style['total-price']}>IDR {total}</h4>
                  </div>
                </div>
              </div>
              </div>
          </div>
          {/* Akhir Order Summarry */}

          <div className="col ml-lg-5 mt-lg-5">
            {/* Awal card address */}
            <div className="row">
              <div className="col">
                <h4 className={style['address-title']}>Address Details</h4>
                <Link className={style['edit-address']} to="/edit">edit</Link>
                <div className={style['card-address']}>
                  <h5 className={style['deliver-teks']}>Delivery to</h5>
                  <h5 className={style['address']}> {address} </h5>
                  <h5 className={style['phone']}>{phonenumber}</h5>
                </div>
              </div>
            </div>
            {/* Akhir card address */}

            {/* Awal Payment Method */}
            <div className="row">
              <div className="col">
                <h4 className={style['payment-title']}>Payment Method</h4>
                <div className={style['card-payment']}>
                  <div className="row">
                    <button type="button" className={style['btn-card-payment']}>
                      <img src={cardpayment} alt=""/>
                      <h5>{cardmethod}</h5>
                    </button>
                  </div>
                  <div className="row">
                    <button type="button" className={style['btn-card-payment']}>
                      <img src={bankpayment} alt=""/>
                      <h5>{bankmethod}</h5>
                    </button>
                  </div>
                  <div className="row">
                    <button type="button" className={style['btn-card-payment']}>
                      <img src={codpayment} alt=""/>
                      <h5>{codmethod}</h5>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Akhir Payment Method */}
            <button type="button" className={[['btn'], style['btn-confirm-pay']].join(' ')}>Confirm and Pay</button>
          </div>
        </div>
    </div>
  )
}

export default PaymentCard


