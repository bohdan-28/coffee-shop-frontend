import React, { Fragment } from "react";
import style from "./asideleft.module.css";
import Button from "../../../components/Button";
// import { withRouter } from "react-router-dom";
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
                            
                            <p className={style.title}>Delivery Hour:</p>
                            <button className={style['btn-select']} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select start hour</button>
                            <div className={[['dropdown-menu'], style['dropdown-disc']].join(' ')}>
                                <Link className="dropdown-item" to="#">Hour ?</Link>
                            </div>

                            <button className={style['btn-select']} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select end hour</button>
                            <div className={[['dropdown-menu'], style['dropdown-date']].join(' ')}>
                                <Link className="dropdown-item" to="#">Tanggal</Link>
                            </div>
                            
                            <p className={style.titleExpire}>Input Stock:</p>
                            <button className={style['btn-select']} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Input stock</button>
                            <div className={[['dropdown-menu'], style['dropdown-date']].join(' ')}>
                                <Link className="dropdown-item" to="#">Stock</Link>
                            </div>

                            {/* <p className={style.title}>Delivery Hour:</p>
                            <Button
                                title="Select start hour"
                                btn="btn-select"
                                color="smoke-white"
                                datatoggle="dropdown"
                                type="button"
                            />
                            <Button
                                title="Select end hour"
                                btn="btn-select"
                                color="smoke-white"
                                datatoggle="dropdown"
                                type="button"
                            />
                            <p className={style.title}>Input Stock:</p>
                            <Button
                                title="Input stock"
                                btn="btn-select"
                                color="smoke-white"
                                onClick=""
                                datatoggle="dropdown"
                                type="button"
                            /> */}

                     

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
