import React from 'react'
import style from './product.module.css'
import SideArticle from '../../parts/ProductCust/SideArticle/SideArticle'
import CouponCard from '../../parts/ProductCust/CouponCard/CouponCard'
import Button from '../../parts/ProductCust/Button/Button'
import TermCondition from '../../parts/ProductCust/TermCondition/TermCondition'
import MainSectionTab from '../../parts/ProductCust/MainSectionTab/MainSectionTab'
import ProductCard from '../../parts/ProductCust/ProductCard/ProductCard'
import { dadCC, motherCC, pirateCC } from '../../assets/images'


function ProductCustomer() {
    return (
        <div className="container-fluid">
            <div className="row">
            <div className={[["col-4"],style['side-section']].join(' ')}>
                <SideArticle />
                <CouponCard pict={`${motherCC}`} title="HAPPY MOTHER'S DAY!" text="Get one of our favourite menu for free!" color="card-green" />
                <CouponCard pict={`${dadCC}`} title="Get a cup of coffee for free on sunday morning" text="Only at 7 to 9 AM" color="card-yellow" />
                <CouponCard pict={`${motherCC}`} title="HAPPY MOTHER'S DAY!" text="Get one of our favourite menu for free!" color="card-green" />
                <CouponCard pict={`${pirateCC}`} title="HAPPY HALLOWEEN!" text="Do you like chicken wings? Get 1 free only if you buy pinky promise" color="card-pink" />
                <Button />
                <TermCondition />
            </div>
            <div className={[["col-8"],style['main-section']].join(' ')}>
                <div className={style['card-section']}>
                <ProductCard />
                </div>
            <p>*The price has been cutted by discount appears</p>
            </div>
            </div>
        </div>

    )
}

export default ProductCustomer
