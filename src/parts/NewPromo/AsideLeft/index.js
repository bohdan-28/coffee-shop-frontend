import React, { Fragment } from "react";
import style from "./asideleft.module.css";
import Button from "../../../components/Button";
// import { withRouter } from "react-router-dom";
import {Link} from 'react-router-dom';

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

                            <div className={style["big-circle"]}>
                                <i className="fa fa-camera fa-4x" />
                                {/* <img
                            // className={style["img-product"]}
                            // src=""
                            // alt="ImgProduct"
                            /> */}
                            </div>

                            <Button
                                title="Take a picture"
                                btn="btn-take-a-picture"
                                color="blue"
                                onClick={handleClick}
                            />
                            <Button
                                title="Choose from gallery"
                                btn="btn-choose-picture-high"
                                color="yellow"
                                onClick={handleClick}
                            />

                            <input
                                type="file"
                                ref={hiddenFileInput}
                                onChange={props.changePicture}
                                style={{ display: "none" }}
                            />
                            
                            {/* <p className={style.title}>Enter the discount:</p>
                            <button className={style['btn-select']} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Input discount</button>
                            <div className={[['dropdown-menu'], style['dropdown-disc']].join(' ')}>
                                <Link className="dropdown-item" to="#">Disconnt ?</Link>
                            </div> */}

                            <p className={style.titleExpire}>Expire date:</p>
                            <button className={style['btn-select']} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select start date</button>
                            <div className={[['dropdown-menu'], style['dropdown-date']].join(' ')}>
                                <Link className="dropdown-item" to="#">Tanggal</Link>
                            </div>

                            <button className={style['btn-select']} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select end date</button>
                            <div className={[['dropdown-menu'], style['dropdown-date']].join(' ')}>
                                <Link className="dropdown-item" to="#">Tanggal</Link>
                            </div>

                            <div className={style.formData}>
                                <label htmlFor="name">Enter the discount:</label>
                                <br />
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Input discount"
                                ></input>

                                <label htmlFor="name">Input coupon code:</label>
                                <br />
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Input stock"
                                ></input>
                            </div>
                            
                            {/* <p className={style.titleExpire}>Input coupon code:</p>
                            <button className={style['btn-select']} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Input stock</button>
                            <div className={[['dropdown-menu'], style['dropdown-date']].join(' ')}>
                                <Link className="dropdown-item" to="#">Tanggal</Link>
                            </div> */}

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
