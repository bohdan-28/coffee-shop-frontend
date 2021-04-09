import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import style from './product.module.css'
import SideArticle from '../../parts/ProductCust/SideArticle/SideArticle'
import CouponCard from '../../parts/ProductCust/CouponCard/CouponCard'
import Button from '../../parts/ProductCust/Button/Button'
import TermCondition from '../../parts/ProductCust/TermCondition/TermCondition'
import ProductCard from '../../parts/ProductCust/ProductCard/ProductCard'
import { dadCC, motherCC, pirateCC } from '../../assets/images'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { getCoffeeProduct, getFavProduct } from '../../configs/redux/actions/product'

function ProductCustomer() {
    const history = useHistory();
    const dispatch = useDispatch();

    const { coffeeProducts, favProducts } = useSelector(state => state.product);
    const [togglestate, setToggleState] = useState(1)

    useEffect(() => {
        dispatch(getFavProduct())
        dispatch(getCoffeeProduct())

    }, [])
    const toggleTab = (index) => {
        setToggleState(index);
    }
    const routeChangeById = (id) => {
        history.push(`/product-detail/${id}`) /*route need to be change as route*/
    }
    return (
        <div className="container-fluid">
            <Navbar />
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
                        <button type="button" className={togglestate === 1 ? `${style.btn} ${style.btnactive}` : `${style.btn}`} onClick={() => toggleTab(1)} >Favourite & Promo</button>
                        <button type="button" className={togglestate === 2 ? `${style.btn} ${style.btnactive}` : `${style.btn}`} onClick={() => toggleTab(2)} >Coffee</button>
                        <button type="button" className={togglestate === 3 ? `${style.btn} ${style.btnactive}` : `${style.btn}`} onClick={() => toggleTab(3)}>Non Coffee</button>
                        <button type="button" className={togglestate === 4 ? `${style.btn} ${style.btnactive}` : `${style.btn}`} onClick={() => toggleTab(4)}>Foods</button>
                        <button type="button" className={togglestate === 5 ? `${style.btn} ${style.btnactive}` : `${style.btn}`} onClick={() => toggleTab(5)}>Add-on</button>

                    </div>
                    <div className={togglestate === 1 ? `${style.cardSection} ${style.activeContent}` : `${style.cardSection}`}>
                        {favProducts.map((item, index) => {
                            return <ProductCard image={item.image} title={item.name} price={item.price} key={index} routeChange={() => routeChangeById(item.id)} />
                        })}
                    </div>
                    <div className={togglestate === 2 ? `${style.cardSection} ${style.activeContent}` : `${style.cardSection}`}>
                        {coffeeProducts.map((item, index) => {
                            return <ProductCard image={item.image} title={item.name} price={item.price} key={index} routeChange={() => routeChangeById(item.id)} />
                        })}
                    </div>
                    <div className={togglestate === 3 ? `${style.cardSection} ${style.activeContent}` : `${style.cardSection}`}>
                        {/* {coffeeProducts.map((item, index) => {
                            return <ProductCard image={item.image} title={item.name} price={item.price} key={index} />
                        })} */}
                        3
                    </div>
                    <div className={togglestate === 4 ? `${style.cardSection} ${style.activeContent}` : `${style.cardSection}`}>
                        {/* {coffeeProducts.map((item, index) => {
                            return <ProductCard image={item.image} title={item.name} price={item.price} key={index} />
                        })} */}
                        4
                    </div>
                    <div className={togglestate === 5 ? `${style.cardSection} ${style.activeContent}` : `${style.cardSection}`}>
                        {/* {coffeeProducts.map((item, index) => {
                            return <ProductCard image={item.image} title={item.name} price={item.price} key={index} />
                        })} */}
                        5
                    </div>
                    <p>*The price has been cutted by discount appears</p>
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default ProductCustomer;
