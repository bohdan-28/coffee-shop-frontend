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
                          <p className={style['product']}>70.000</p>

                          <p className={style['product-detail']}>Beef Spaghetti tapi gambar minuman</p>
                          <div className={style['line']}></div>
                          <p className={style['product-teks']}>PRODUCT SIZE</p>

                          <p className={style['product-size']}>L XL</p>
                          <p className={style['product-stock']}>Stock ??</p>
                          </div>

                            

                            <input
                                type="file"
                                ref={hiddenFileInput}
                                onChange={props.changePicture}
                                style={{ display: "none" }}
                            />

                            <p className={style.titleExpire}>Expire date:</p>
                            <button className={style['btn-select']} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select start date</button>
                            <div className={[['dropdown-menu'], style['dropdown-product']].join(' ')}>
                                <Link className="dropdown-item" to="#">Tanggal ?</Link>
                            </div>

                            <button className={style['btn-select']} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select end date</button>
                            <div className={[['dropdown-menu'], style['dropdown-product']].join(' ')}>
                                <Link className="dropdown-item" to="#">Tanggal ?</Link>
                            </div>


                            <div className={style.formData}>
                                <label className={style['label-product']} htmlFor="name">Edit stock:</label>
                                <br />
                                <input
                                    className={style['input-product-code']}
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Edit stock here"
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
