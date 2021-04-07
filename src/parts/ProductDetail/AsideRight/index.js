import React, { Fragment } from 'react'
import style from './aside.module.css'
import Button from '../Button/Button'
import { withRouter } from "react-router-dom";

const AsideRight = (props) => {

    return (
        <Fragment>
            <div className="container">
                <p className={style['title-product']}>COLD BREW</p>
                <p className={style['subtitle-product']}>Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.</p>
                <p className={style['info-delivery']}>Delivery only on
                <span> Monday to<br /> friday</span> at <span> 1 - 7 pm</span></p>
                <div className="d-flex pt-5 pb-5">
                    <Button title="-" btn="btn-minus" />
                    <Button title="2" btn="btn-number" />
                    <Button title="+" btn="btn-plus" />
                    <p className={style['text-price']}>IDR 30.000</p>
                </div>
                <Button title="Add to Cart" btn="btn-addCart" />
                <Button title="Ask a Staff" btn="btn-askStaff" />

            </div>


        </Fragment>
    )
}


export default withRouter(AsideRight);