import React, { Fragment } from "react";
import style from "./profile.module.css";
// import { Card, Nav, Form, Dropdown } from 'react-bootstrap';
import Button from "../../components/Button";
// import { withRouter } from "react-router-dom";
import btnProfile from "../../assets/images/btnProfile.png";
import backPage from "../../assets/images/backProfile.png";

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
  };

  return (
    <Fragment>
      <div className={style["cards-profile"]}>
        <div className="container">
          <div className="row">
            <p className={style["title-profile"]}>User Profile</p>

            {/* v.mobile */}
            <img
              className={style["back-page"]}
              src={backPage}
              onClick=""
              alt="Img"
            />
            <p className={style["title-profile-mobile"]}>My profile</p>
            {/* v.mobile */}

            <div className={style["card-profile"]}>
              <div className="row">
                <div className="col-12 col-lg-3">
                  <div className={style["big-circle"]}>
                    <img
                      className={style["img-user"]}
                      src="https://uploads.disquscdn.com/images/dc368ebd907dfb3c40406ed0c842b10023f20651969cbd4bf77e524b3bf29ce7.jpg"
                      alt="ImgUser"
                    />
                  </div>
                  <h2 className={style["name-profile"]}>Zulaikha</h2>
                  <h2 className={style["email-profile"]}>Zulaikha@gmail.com</h2>

                  <Button
                    title="Choose photo"
                    btn="btn-choose-picture"
                    color="yellow"
                    onClick={handleClick}
                  />
                  <input
                    type="file"
                    ref={hiddenFileInput}
                    onChange={props.changePicture}
                    style={{ display: "none" }}
                  />
                  <Button
                    title="Remove photo"
                    btn="btn-remove-photo"
                    color="chocolate"
                  />
                  <Button
                    title="Edit Password "
                    btn="btn-outline"
                    color="white"
                  />
                  <p className={style["text-left-profile"]}>
                    Do you want to save the change?
                  </p>
                  <Button
                    title="Save Change "
                    btn="btn-fill"
                    color="chocolate"
                  />
                  <Button
                    title="Cancel "
                    btn="btn-fill"
                    color="yellow"
                  />
                  <Button
                    title="Log out "
                    btn="btn-outline"
                    color="white"
                  />
                </div>
                <div className="col-12 col-lg-9">
                  <div className={style["card-profile-right"]}>
                    <p className={style["text-title-right"]}>Contact</p>
                    <div className={style["circle-btnProfile"]}>
                      <img src={btnProfile} onClick="" alt="ImgProfile" />
                    </div>
                    <label htmlFor="email">Email adress :</label>
                    <br />
                    <input
                      id="email"
                      type="text"
                      name="email"
                      placeholder="zulaikha@gmail.com"
                    ></input>

                    <label
                      className={style["mobile-number"]}
                      htmlFor="phoneNumber"
                    >
                      Mobile number :
                    </label>
                    <br />
                    <input
                      className={style["input-mobile-number"]}
                      id="phoneNumber"
                      type="number"
                      name="phoneNumber"
                      placeholder="08392391319"
                    ></input>

                    <label htmlFor="address">Delivery adress :</label>
                    <br />
                    <input
                      id="address"
                      type="text"
                      name="address"
                      placeholder="Iskandar Street no. 67 Block A Near Bus Stop"
                    ></input>

                    <p className={style["text-title-right"]}>Details</p>
                    <label htmlFor="userName">Display name :</label>
                    <br />
                    <input
                      id="userName"
                      type="text"
                      name="userName"
                      placeholder="zulaikha"
                    ></input>

                    <label
                      className={style["dateOfBirth"]}
                      htmlFor="dateOfBirth"
                    >
                      DD/MM/YY
                    </label>
                    <br />
                    <input
                      className={style["input-dateOfBirth"]}
                      id="dateOfBirth"
                      type="date"
                      name="dateOfBirth"
                      placeholder="03/04/90"
                    ></input>

                    <label htmlFor="firstName">First name :</label>
                    <br />
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      placeholder="zulaikha"
                    ></input>
                    <br />

                    <label htmlFor="lastName">Last name :</label>
                    <br />
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      placeholder="Nirmala"
                    ></input>
                    <br />

                    <input
                      className={style.gender}
                      id="gendermale"
                      type="radio"
                      name="gender"
                    ></input>
                    <label htmlFor="gendermale">Male</label>
                    <input
                      className={style.gender}
                      id="genderfemale"
                      type="radio"
                      name="gender"
                    ></input>
                    <label htmlFor="genderfemale">Female</label>
                    <div className={style["card-footer"]}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PartProfile;
