import React, { Fragment } from 'react'
import style from './aside.module.css'
import Button from '../Button/Button'
import { withRouter } from "react-router-dom";

const AsideRight = ({ count, setCount, title, desc, price, setSumPrice }) => {


    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
        return count
    }
    const addToCart = () => {
        setSumPrice(price * count)
    }

    return (
        <Fragment>
            <div className="container">
                <p className={style['title-product']}>{title}</p>
                <p className={style['subtitle-product']}>{desc}</p>
                <p className={style['info-delivery']}>Delivery only on
                <span> Monday to<br /> friday</span> at <span> 1 - 7 pm</span></p>
                <div className="d-flex pt-5 pb-5">
                    <Button title="-" btn="btn-minus" onClick={decrement} />
                    <Button title={count} btn="btn-number" />
                    <Button title="+" btn="btn-plus" onClick={increment} />
                    <p className={style['text-price']}>IDR {price}</p>
                </div>
                <Button title="Add to Cart" btn="btn-addCart" onClick={() => addToCart()} />
                <Button title="Ask a Staff" btn="btn-askStaff" />

            </div>


        </Fragment>
    )
}


export default withRouter(AsideRight);