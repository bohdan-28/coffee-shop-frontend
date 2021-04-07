import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import style from './product.module.css'
import SideArticle from '../../parts/ProductCust/SideArticle/SideArticle'
import CouponCard from '../../parts/ProductCust/CouponCard/CouponCard'
import Button from '../../parts/ProductCust/Button/Button'
import TermCondition from '../../parts/ProductCust/TermCondition/TermCondition'
import ProductCard from '../../parts/ProductCust/ProductCard/ProductCard'
import { dadCC, motherCC, pirateCC } from '../../assets/images'


function ProductCustomer() {
    const history = useHistory();

    const [type, setType] = useState('posts')
    const [item, setItem] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setItem(json))
    }, [type])

    const routeChangeById = (id) => {
        history.push(`/moviedetails/${id}`) /*route need to be change as route*/
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className={[["col-4"], style['side-section']].join(' ')}>
                    <SideArticle />
                    <CouponCard pict={`${motherCC}`} title="HAPPY MOTHER'S DAY!" text="Get one of our favourite menu for free!" color="card-green" />
                    <CouponCard pict={`${dadCC}`} title="Get a cup of coffee for free on sunday morning" text="Only at 7 to 9 AM" color="card-yellow" />
                    <CouponCard pict={`${motherCC}`} title="HAPPY MOTHER'S DAY!" text="Get one of our favourite menu for free!" color="card-green" />
                    <CouponCard pict={`${pirateCC}`} title="HAPPY HALLOWEEN!" text="Do you like chicken wings? Get 1 free only if you buy pinky promise" color="card-pink" />
                    <Button />
                    <TermCondition />
                </div>
                <div className={[["col-8"], style['main-section']].join(' ')}>
                    <div className={style["tab-card"]}>
                        <button type={["button"]} id={style["btn-tab"]} className="btn btn-outline-primary" onClick={() => setType('posts')}>Favourite & Promo</button>
                        <button type={["button"]} id={style["btn-tab"]} className="btn btn-outline-primary" onClick={() => setType('todos')}>Coffee</button>
                        <button type={["button"]} id={style["btn-tab"]} className="btn btn-outline-primary" onClick={() => setType('todos')}>Non Coffee</button>
                        <button type={["button"]} id={style["btn-tab"]} className="btn btn-outline-primary" onClick={() => setType('todos')}>Foods</button>
                        <button type={["button"]} id={style["btn-tab"]} className="btn btn-outline-primary" onClick={() => setType('todos')}>Add-on</button>
                    </div>
                    
                    <div className={style['card-section']}>
                        {item.splice(0, 12).map((product, index) => {
                            return <ProductCard title={product.title} price={product.id} key={index} routeChange={() => routeChangeById(product.id)} />
                        })}
                    </div>
                    <p>*The price has been cutted by discount appears</p>
                </div>
            </div>
        </div>

    )
}

export default ProductCustomer
