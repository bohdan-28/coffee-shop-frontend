import React, { Component, Fragment, useState } from 'react'
import style from './profile.module.css'
// import { Card, Nav, Form, Dropdown } from 'react-bootstrap';
import Button from '../../components/Button'
import { withRouter } from "react-router-dom";
import btnProfile from '../../assets/images/btnProfile.png'


const PartProfile = (props) => {
    // const [isPasswordShow, setisPasswordShow] = useState(false)
    // const [isPasswordShow2, setisPasswordShow2] = useState(false)

    // const tooglePasswordVisibility = (e) => {
    //     e.preventDefault();
    //     setisPasswordShow(!isPasswordShow);
    // }

    // const tooglePasswordVisibility2 = (e) => {
    //     e.preventDefault();
    //     setisPasswordShow2(!isPasswordShow2);
    // }

    const hiddenFileInput = React.useRef(null);
    const handleClick = (e) => {
        hiddenFileInput.current.click();
    }

    return (
        <Fragment>
            <div className={style['cards-profile']}>
                <div className="container">
                    <div class="row">
                        <p className={style['title-profile']}>User Profile</p>
                        <div className={style['card-profile']}>
                            <div class="row">
                                <div className="col-12 col-lg-3">
                                    <div className={style['big-circle']}>
                                        <img class={style['img-user']} src="https://uploads.disquscdn.com/images/dc368ebd907dfb3c40406ed0c842b10023f20651969cbd4bf77e524b3bf29ce7.jpg" />
                                    </div>
                                    <h2 className={style['name-profile']}>Zulaikha</h2>
                                    <h2 className={style['email-profile']}>Zulaikha@gmail.com</h2>

                                    <Button title="Choose photo" btn="btn-choose-picture" color="yellow" onClick={handleClick} />
                                    <input type="file"
                                        ref={hiddenFileInput}
                                        onChange={props.changePicture}
                                        style={{ display: 'none' }}
                                    />
                                    <Button title="Remove photo" btn="btn-remove-photo" color="chocolate" onClick="" />
                                    <Button title="Edit Password " btn="btn-outline" color="white" onClick="" />
                                    <p className={style['text-left-profile']}>Do you want to save the change?</p>
                                    <Button title="Save Change " btn="btn-fill" color="chocolate" onClick="" />
                                    <Button title="Cancel " btn="btn-fill" color="yellow" onClick="" />
                                    <Button title="Log out " btn="btn-outline" color="white" onClick="" />

                                </div>
                                <div className="col-12 col-lg-9">
                                    <div className={style['card-profile-right']}>
                                        <p className={style['text-title-right']}>Contact</p>
                                        <div className={style['circle-btnProfile']}>
                                            <img src={btnProfile} onClick="" />
                                        </div>
                                        <label htmlFor="email">Email adress :</label><br />
                                        <input id="email" type="text" name="email" placeholder="zulaikha@gmail.com"></input>

                                        <label className={style['mobile-number']} htmlFor="phoneNumber">Mobile number :</label><br />
                                        <input className={style['input-mobile-number']} id="phoneNumber" type="number" name="phoneNumber" placeholder="08392391319"></input>

                                        <label htmlFor="address">Delivery adress :</label><br />
                                        <input id="address" type="text" name="address" placeholder="Iskandar Street no. 67 Block A Near Bus Stop"></input>

                                        <p className={style['text-title-right']}>Details</p>
                                        <label htmlFor="userName">Display name :</label><br />
                                        <input id="userName" type="text" name="userName" placeholder="zulaikha"></input>

                                        <label className={style['dateOfBirth']} htmlFor="dateOfBirth">DD/MM/YY</label><br />
                                        <input className={style['input-dateOfBirth']} id="dateOfBirth" type="date" name="dateOfBirth" placeholder="03/04/90"></input>

                                        <label htmlFor="firstName">First name :</label><br />
                                        <input id="firstName" type="text" name="firstName" placeholder="zulaikha"></input><br />

                                        <label htmlFor="lastName">Last name :</label><br />
                                        <input id="lastName" type="text" name="lastName" placeholder="Nirmala"></input><br />

                                        <input className={style.gender} id="gendermale" type="radio" name="gender" ></input>
                                        <label for="gendermale">Male</label>
                                        <input className={style.gender} id="genderfemale" type="radio" name="gender" ></input>
                                        <label for="genderfemale">Female</label>
                                        <div className={style['card-footer']}></div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* <div class="col-12 col-lg-8">
                            <div className={style['info-profile-right']}>
                                <Card className={style['card-account']}>
                                    <Card.Header>
                                        <Nav variant="tabs" defaultActiveKey="#first">
                                            <Nav.Item>
                                                <Nav.Link href="#first">Account Settings</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link href="/history">Order History</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Card.Header>
                                    <Card.Body  >
                                        <Card.Title className={style['detail-title']} id="#first" >Details Information</Card.Title>
                                        <hr />

                                        <div className={style['form-profile']}>
                                            <Form className={style['form-profile-firstname']}>
                                                <label htmlFor="firstName">First Name</label><br />
                                                <input className={style['input-firstname']} id="firstName" name="firstName" type="text" value={props.first} placeholder={props.first} onChange={props.change} />
                                            </Form>
                                            <Form className={style['form-profile-lastName']}>
                                                <label htmlFor="lastName">Last Name</label><br />
                                                <input className={style['input-lastName']} id="lastName" name="lastName" type="text" value={props.last} placeholder={props.last} onChange={props.change} />
                                            </Form>
                                        </div>
                                        <div className={style['form-profile']}>
                                            <Form className={style['form-profile-email']}>
                                                <label htmlFor="email">Email</label><br />
                                                <input className={style['input-email']} id="email" name="email" type="text" value={props.mail} placeholder={props.mail} onChange={props.change} />
                                            </Form>
                                            <Form className={style['form-profile-phone']}>
                                                <label htmlFor="phone">Phone Number</label><br />
                                                <input className={style['input-phone']} id="phone" name="phone" type="text" value={props.phonenumber} placeholder={props.phonenumber} onChange={props.change} />
                                            </Form>
                                        </div>

                                        <Card.Title className={style['detail-title2']}>Account and Privacy</Card.Title>
                                        <hr />
                                        <div className={style['form-profile']}>
                                            <Form className={style['form-profile-password']}>
                                                <label htmlFor="password">New Password</label><br />
                                                <input className={style['input-password']} id="password" name="password" value={props.pass}
                                                    type={(isPasswordShow) ? "text" : "password"} placeholder="Write your password" onChange={props.change} />
                                                <i className={`fa ${isPasswordShow ? "fa-eye-slash" : "fa-eye"}  password-icon`} onClick={tooglePasswordVisibility} />

                                            </Form>
                                            <Form className={style['form-profile-passwords']}>
                                                <label htmlFor="password">Confirm your password</label><br />
                                                <input className={style['input-password']} id="confirmPassword" name="password" value={props.pass}
                                                    type={(isPasswordShow2) ? "text" : "password"} placeholder="Confirm your password" onChange={props.change} />
                                                <i className={`fa ${isPasswordShow2 ? "fa-eye-slash" : "fa-eye"}  password-icon`} onClick={tooglePasswordVisibility2} />
                                            </Form>
                                        </div>
                                        <Button title="Update changes" type="submit" btn="btn-update-changes" color="purple" onClick={props.update} />

                                    </Card.Body>



                                </Card>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>


        </Fragment>
    )
}


export default withRouter(PartProfile);