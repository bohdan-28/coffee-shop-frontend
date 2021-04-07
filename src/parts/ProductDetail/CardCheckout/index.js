import React, { Fragment } from 'react'
import style from './CardCheckout.module.css'
import { withRouter } from "react-router-dom";

const CardCheckout = (props) => {

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className={style.size}>
                            <p className={style['title-size']}>Choose size</p>
                            <div className="d-flex pl-5">
                                <button className={style['circle-size']}>R</button>
                                <button className={style['circle-size']}>L</button>
                                <button className={style['circle-size']}>XL</button>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className={style.checkout}>
                            <div className="d-flex">
                                <img className={style['img-product']} src="http://www.southsoundtalk.com/wp-content/uploads/2019/11/Coffee-ander-Latte-e1573143205948.jpg" alt="" />
                                <div className="pl-5">
                                    <p className={style['title-checkout']}>COLD BREW</p>
                                    <p className={style['subtitle-checkout']}>x1 (Large)</p>
                                </div>
                                <p className={style['title-btn-checkout']}>Checkout</p>
                                <button className={style['circle-checkout']}><i className="fa fa-arrow-right" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </Fragment >
    )
}


export default withRouter(CardCheckout);