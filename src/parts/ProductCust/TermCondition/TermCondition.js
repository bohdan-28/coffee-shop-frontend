import React from 'react'
import style from './term.module.css'

function TermCondition() {
    return (
        <div className={style["term-condition"]}>
            <h6>Terms and Condition</h6>
            <ol>
                <li>You can only apply 1 coupon per day</li>
                <li>It only for dine in</li>
                <li>Buy 1 get 1 only for new user</li>
                <li>Should make member card to apply coupon</li>
            </ol>
        </div>
    )
}

export default TermCondition
