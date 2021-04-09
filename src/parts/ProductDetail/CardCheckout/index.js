import React, { Fragment, useState } from 'react'
import style from './CardCheckout.module.css'
import { withRouter, useHistory } from "react-router-dom";

const CardCheckout = ({ title, count, sumPrice }) => {
    const history = useHistory();
    const [size, setSize] = useState('')

    const routeChange = () => {
        history.push('/payment-delivery')
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className={style.size}>
                            <p className={style['title-size']}>Choose size</p>
                            <div className="d-flex pl-5">
                                <button className={style['circle-size']} onClick={() => setSize('Regular')}>R</button>
                                <button className={style['circle-size']} onClick={() => setSize('Large')}>L</button>
                                <button className={style['circle-size']} onClick={() => setSize('Extra Large')}>XL</button>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className={style.checkout}>
                            <div className="d-flex">
                                <img className={style['img-product']} src="http://www.southsoundtalk.com/wp-content/uploads/2019/11/Coffee-ander-Latte-e1573143205948.jpg" alt="" />
                                <div className="pl-5">
                                    <p className={style['title-checkout']}>{title}</p>
                                    <p className={style['subtitle-checkout']}>{count === 0 ? '' : `X${count}\u00A0\u00A0(${size})`}</p>
                                </div>
                                <p className={style['title-btn-checkout']}>Checkout</p>
                                <button className={style['circle-checkout']} onClick={routeChange}><i className="fa fa-arrow-right" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </Fragment >
    )
}


export default withRouter(CardCheckout);