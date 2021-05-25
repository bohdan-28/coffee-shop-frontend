import React, { Fragment } from "react";
import style from "./asideright.module.css";
import Button from "../Button/Button";
// import { withRouter } from "react-router-dom";
import {Link} from 'react-router-dom';

const AsideRight = (props) => {

    return (
        <Fragment>
            <div className={style["cards-product"]}>
                <div className="container">
                    <div className="row">
                        <div className={style.formData}>
                            <label htmlFor="name">Name :</label>
                            <br />
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Beef Spagehetti"
                            ></input>

                            <label htmlFor="price">Normal Price :</label>
                            <br />
                            <input
                                id="price"
                                type="text"
                                name="price"
                                placeholder="70.000"
                            ></input>

                            <label htmlFor="description">Description :</label>
                            <br />
                            <input
                                id="description"
                                type="text"
                                name="description"
                                placeholder="Buy 1 Choco Oreo and get 20% off for Beef Spaghetti"
                            ></input>

                            <label htmlFor="description">Input product size :</label>
                            <p className={style.textSize}>Click size you want to use for this promo</p>

                            <div className={style.size}>
                                <div className="d-flex pl-5">
                                    <button className={style['circle-size']}>R</button>
                                    <button className={style['circle-size']}>L</button>
                                    <button className={style['circle-size']}>XL</button>
                                    <button className={style['circle-size-litle']}>250 gr</button>
                                    <button className={style['circle-size-litle']}>300 gr</button>
                                    <button className={style['circle-size-litle']}>500 gr</button>
                                </div>
                            </div>

                            <label htmlFor="description">Input delivery methods :</label>
                            <p className={style.textSize}>Click methods you want to use for this promo</p>
                            <div className="row flex-nowrap">
                                <Button title="Home Delivery" btn="btn-HomeDelivery" onClick="" />
                                <Button title="Dine In" btn="btn-dineIn" onClick="" />
                                <Button title="Take Away" btn="btn-pickUp" onClick="" />
                            </div>

                            <p className={style.titleExpire}>Enter the discount:</p>
                            <button className={style['btn-enter-disc']} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">20% == 63.000</button>
                            <div className={[['dropdown-menu'], style['dropdown-disc']].join(' ')}>
                                <Link className="dropdown-item" to="#">10 % ?</Link>
                                <Link className="dropdown-item" to="#">20 % ?</Link>
                                <Link className="dropdown-item" to="#">30 % ?</Link>
                            </div>

                    
                            
                            
                          

                            <Button title="Save Promo" btn="btn-save" onClick="" />
                            
                        </div>




                    </div>
                </div>
            </div>
        </Fragment >
    );
};

export default AsideRight;
