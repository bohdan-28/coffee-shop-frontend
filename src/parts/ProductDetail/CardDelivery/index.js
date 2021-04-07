import React, { Fragment } from 'react'
import style from './CardDelivery.module.css'
import Button from '../Button/Button'
import { withRouter } from "react-router-dom";

const CardDelivery = (props) => {

    return (
        <Fragment>
            <div className="container">
                {/* image Product */}
                <img className={style['img-product']} src="http://www.southsoundtalk.com/wp-content/uploads/2019/11/Coffee-ander-Latte-e1573143205948.jpg" alt="" />
                {/* card-delivery */}
                <div className={style['card-delivery']}>
                    <p className={style['title-card-delivery']}>Delivery and Time</p>
                    <div className="row flex-nowrap">
                        <Button title="Dine in" btn="btn-dineIn" onClick="" />
                        <Button title="Door Delivery" btn="btn-DoorDelivery" onClick="" />
                        <Button title="Pick up" btn="btn-pickUp" onClick="" />
                    </div>
                    <div className="row flex-nowrap pt-5">
                        <p className={style['subtitle-card-delivery']}>Now</p>
                        <Button title="Yes" btn="btn-now" onClick="" />
                        <Button title="No" btn="btn-now" onClick="" />
                    </div>
                    <div className="row flex-nowrap pt-5">
                        <p className={style['subtitle-card-delivery']}>Set time</p>
                        <input id="Settime" type="text" name="Settime" placeholder="Enter time for reservation"></input>
                    </div>

                </div>
            </div>


        </Fragment>
    )
}


export default withRouter(CardDelivery);