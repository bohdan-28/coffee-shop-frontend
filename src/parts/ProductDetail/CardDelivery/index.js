import React, { Fragment } from 'react'
import style from './CardDelivery.module.css'
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
                    <div className={[["row"],["flex-nowrap"], style['div-flex']].join(' ')} >
                        <div className={style["radio"]}>
                        <input type="radio" id="dineIn" name="delivery" value="dineIn" />
                        <label for="dineIn">Dine In</label>
                        </div>
                        <div className={style["radio"]}>
                        <input type="radio" id="deliv" name="delivery" value="deliv" />
                        <label for="deliv">Door Delivery</label>
                        </div>
                        <div className={style["radio"]}>
                        <input type="radio" id="pickUp" name="delivery" value="pickUp" />
                        <label for="pickUp">Pick Up</label>
                        </div>

                    </div>
                    <div className={[["row"],["flex-nowrap"],["pt-5"], style['div-flex']].join(' ')}>
                        <p className={style['subtitle-card-delivery']}>Now</p>
                        <div className={style["radio"]}>
                        <input type="radio" id="yes" name="time" value="yes" />
                        <label for="yes">Yes</label>
                        </div>
                        <div className={style["radio"]}>
                        <input type="radio" id="no" name="time" value="no" />
                        <label for="no">No</label>
                        </div>
                        
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