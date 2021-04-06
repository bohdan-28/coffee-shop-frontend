import React, { Component } from 'react'
import style from './footer.module.css'
// import { Footer } from 'react-bootstrap';
import logoFooter from '../../assets/images/logoFooter.png';


class Footer extends Component {
    render() {
        return (
            <div className={style.footer}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className={style['brand-footer']}>
                                <img src={logoFooter} alt="footer" />
                                <p className={style['text-brand-title']}>Coffee Shop</p>
                            </div>
                            <p className={style['text-brand-subtitle']}>Coffee Shop is a store that sells some good<br />
                            meals, and especially coffee. We provide<br />
                            high quality beans</p>
                            <div className={style['social-media']} >
                                <div className={style.circle}>
                                    <i className="fab fa-facebook-f" />
                                </div>
                                <div className={style.circle}>
                                    <i className="fab fa-twitter" />
                                </div>
                                <div className={style.circle}>
                                    <i className="fab fa-instagram " />
                                </div>
                            </div>
                            <p className={style['text-copyright']}>©2020 CoffeeStore</p>

                        </div>
                        <div className="col-lg-2">
                            <p className={style['text-title-footer']}>Product</p>
                            <div className={style.product}>
                                <p className={style['text-subtitle-footer']}>Download</p>
                                <p className={style['text-subtitle-footer']}>Pricing</p>
                                <p className={style['text-subtitle-footer']}>Locations</p>
                                <p className={style['text-subtitle-footer']}>Countries</p>
                                <p className={style['text-subtitle-footer']}>Blog</p>
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <p className={style["text-title-footer"]}>Engage</p>
                            <div className={style.engage}>
                                <p className={style['text-subtitle-footer']}>Coffe Shop</p>
                                <p className={style['text-subtitle-footer']}>FAQ</p>
                                <p className={style['text-subtitle-footer']}>About Us</p>
                                <p className={style['text-subtitle-footer']}>Privacy Policy</p>
                                <p className={style['text-subtitle-footer']}>Terms of Service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer