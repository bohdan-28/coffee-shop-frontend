import React, { Fragment } from "react";
import style from "./asideleft.module.css";
import Button from "../../../components/Button";
// import { withRouter } from "react-router-dom";
import {hazelnutlatte} from '../../../assets/images'
import {Link} from 'react-router-dom'

const AsideLeft = (props) => {

    const hiddenFileInput = React.useRef(null);
    const handleClick = (e) => {
        hiddenFileInput.current.click();
    };

    return (
        <Fragment>
            <div className={style["cards-profile"]}>
                <div className="container">
                    <div className="row">
                        <div className={style.asideLeft}>

                            {/* <div className={style["big-circle"]}> */}
                          <div className={style['product-box']}>

                            <img
                            className={style["img-product"]}
                            src={hazelnutlatte}
                            alt="ImgProduct"
                            /> 
                            {/* </div> */}

                            <Button
                                title=" "
                                btn="btn-edit-pict"
                                color="blue"
                                onClick={handleClick}
                            />
                          <p className={style['product-title']}>Beef Spaghetti</p>
                          <p className={style['disc']}>20 % OFF</p>

                          <p className={style['promo-detail']}>Buy 1 Choco Oreo and get 20% off for Beef Spaghetti</p>
                          <div className={style['line']}></div>
                          <p className={style['coupon-teks']}>COUPON CODE</p>

                          <p className={style['coupon-code']}>KFAP01ALP</p>
                          <p className={style['promo-end']}>Valid until March 15 2021</p>
                          </div>

                            

                            <input
                                type="file"
                                ref={hiddenFileInput}
                                onChange={props.changePicture}
                                style={{ display: "none" }}
                            />

                            <p className={style.titleExpire}>Expire date:</p>
                            <button className={style['btn-select']} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select start date</button>
                            <div className={[['dropdown-menu'], style['dropdown-disc']].join(' ')}>
                                <Link className="dropdown-item" to="#">Tanggal ?</Link>
                            </div>

                            <button className={style['btn-select']} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select end date</button>
                            <div className={[['dropdown-menu'], style['dropdown-disc']].join(' ')}>
                                <Link className="dropdown-item" to="#">Tanggal ?</Link>
                            </div>


                            <div className={style.formData}>
                                <label className={style['label-promo']} htmlFor="name">Input promo code:</label>
                                <br />
                                <input
                                    className={style['input-promo-code']}
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Code Promo here"
                                ></input>
                            </div>
                     

                        </div>

                        {/* <div className="col-12 col-lg-6">
                                <p className={style["text-title-right"]}>Contact</p>

                                <label htmlFor="email">Email adress :</label>
                                <br />
                                <input
                                    id="email"
                                    type="text"
                                    name="email"
                                    placeholder="zulaikha@gmail.com"
                                ></input>




                            </div> */}
                    </div>
                </div>
            </div>
        </Fragment >
    );
};

export default AsideLeft;
