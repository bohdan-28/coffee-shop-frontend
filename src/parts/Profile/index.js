import React, { Fragment, useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { update, getUser, findUser } from "../../configs/redux/actions/user";
import Swal from "sweetalert2";
import style from "./profile.module.css";
import Button from "../../components/Button";
import btnProfile from "../../assets/images/btnProfile.png";
import backPage from "../../assets/images/backProfile.png";

const PartProfile = () => {
  const ImgUrl = process.env.REACT_APP_API_IMG;

  const history = useHistory();

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [data, setData] = useState({
    email: "",
    phoneNumber: "",
    username: "",
    firstname: "",
    lastname: "",
    address: "",
    gender: "",
    dateOfBirth: "",
  });
  const [dataImage, setDataImage] = useState({
    image: {},
  });
  const [status, setStatus] = useState(false);
  const [imgUrl, setImgUrl] = useState(`${ImgUrl}${user.image}`);
  const [disabled, setDisabled] = useState(true);

  const handleFormChange = (event) => {
    const userNew = { ...data };
    userNew[event.target.name] = event.target.value;
    setData(userNew);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("username", data.username);
    formData.append("firstname", data.firstname);
    formData.append("lastname", data.lastname);
    formData.append("address", data.address);
    formData.append("gender", data.gender);
    formData.append("dateOfBirth", data.dateOfBirth);
    if (status === true) {
      formData.append("image", dataImage.image);
    }
    dispatch(update(formData, user.id))
      .then((res) => {
        setDisabled(true);
        Swal.fire({
          title: "Success!",
          text: res,
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#ffba33",
        }).then(() => {
          dispatch(findUser()).then((res) => {
            dispatch(getUser());
            setData(res);
          });
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#6a4029",
        });
      });
  };

  const handleChangeImage = (event) => {
    setDataImage({
      image: event.target.files[0],
    });
    setStatus(true);
    setImgUrl(URL.createObjectURL(event.target.files[0]));
  };

  const handleRemoveImage = () => {
    dispatch(getUser());
    setDataImage({
      image: {},
    });
    setStatus(false);
    setImgUrl(`${ImgUrl}${user.image}`);
  };

  const handleDisabledFalse = () => {
    setDisabled(false);
  };

  const handleDisabledTrue = () => {
    setDisabled(true);
    dispatch(findUser()).then((res) => {
      setData(res);
    });
    dispatch(getUser());
    setImgUrl(`${ImgUrl}${user.image}`);
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure you want to logout?",
      showDenyButton: true,
      confirmButtonText: `Logout!`,
      confirmButtonColor: "#6a4029",
      denyButtonText: "Cancel",
      denyButtonColor: `#ffba33`,
      focusDeny: true,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        history.push("/");
      } else {
        Swal.fire({
          title: "Logout canceled",
          text: "",
          icon: "info",
          confirmButtonText: "Ok",
          confirmButtonColor: "#6a4029",
        });
      }
    });
  };

  const hiddenFileInput = useRef(null);
  const handleClick = (e) => {
    hiddenFileInput.current.click();
  };

  useEffect(() => {
    dispatch(getUser());
    setImgUrl(`${ImgUrl}${user.image}`);
  }, [dispatch, ImgUrl, user.image]);

  useEffect(() => {
    dispatch(findUser()).then((res) => {
      setData(res);
    });
  }, [dispatch]);

  return (
    <Fragment>
      <div className={style["cards-profile"]}>
        <div className="container">
          <div className="row">
            <p className={style["title-profile"]}>User Profile</p>
            <img className={style["back-page"]} src={backPage} alt="Img" />
            <p className={style["title-profile-mobile"]}>My profile</p>
            <div className={style["card-profile"]}>
              <div className="row">
                <div className="col-12 col-lg-3">
                  <div className={style["big-circle"]}>
                    {user.image === undefined ? (
                      ""
                    ) : (
                      <img
                        className={style["img-user"]}
                        src={imgUrl}
                        alt="ImgUser"
                      />
                    )}
                  </div>
                  <h2 className={style["name-profile"]}>{data.username}</h2>
                  <h2 className={style["email-profile"]}>{data.email}</h2>
                  <Button
                    title="Choose photo"
                    btn="btn-choose-picture"
                    color="yellow"
                    onClick={handleClick}
                  />
                  <input
                    type="file"
                    name="image"
                    ref={hiddenFileInput}
                    onChange={(event) => handleChangeImage(event)}
                    style={{ display: "none" }}
                  />
                  <Button
                    title="Remove photo"
                    btn="btn-remove-photo"
                    color="chocolate"
                    onClick={() => handleRemoveImage()}
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
                    title="Save Changes"
                    btn="btn-fill"
                    color="chocolate"
                    onClick={handleSubmit}
                  />
                  <Button
                    title="Cancel"
                    btn="btn-fill"
                    color="yellow"
                    onClick={() => handleDisabledTrue()}
                  />
                  <Button
                    title="Log out"
                    btn="btn-outline"
                    color="white"
                    onClick={() => handleLogout()}
                  />
                </div>
                <div className="col-12 col-lg-9">
                  <div className={style["card-profile-right"]}>
                    <p className={style["text-title-right"]}>Contact</p>
                    <div className={style["circle-btnProfile"]}>
                      <img
                        src={btnProfile}
                        alt="ImgProfile"
                        onClick={() => handleDisabledFalse()}
                      />
                    </div>
                    <label htmlFor="email">Email adress :</label>
                    <br />
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="zulaikha@gmail.com"
                      value={data.email}
                      onChange={handleFormChange}
                      disabled={disabled}
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
                      type="text"
                      name="phoneNumber"
                      placeholder="08392391319"
                      value={data.phoneNumber}
                      onChange={handleFormChange}
                      disabled={disabled}
                    ></input>
                    <label htmlFor="address">Delivery address :</label>
                    <br />
                    <input
                      id="address"
                      type="text"
                      name="address"
                      placeholder="Iskandar Street no. 67 Block A Near Bus Stop"
                      value={data.address}
                      onChange={handleFormChange}
                      disabled={disabled}
                    ></input>
                    <p className={style["text-title-right"]}>Details</p>
                    <label htmlFor="username">Display name :</label>
                    <br />
                    <input
                      id="username"
                      type="text"
                      name="username"
                      placeholder="zulaikha"
                      value={data.username}
                      onChange={handleFormChange}
                      disabled={disabled}
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
                      placeholder="2000-05-20"
                      onChange={handleFormChange}
                      disabled={disabled}
                    ></input>
                    <label htmlFor="firstname">First name :</label>
                    <br />
                    <input
                      id="firstname"
                      type="text"
                      name="firstname"
                      placeholder="zulaikha"
                      value={data.firstname}
                      onChange={handleFormChange}
                      disabled={disabled}
                    ></input>
                    <br />
                    <label htmlFor="lastname">Last name :</label>
                    <br />
                    <input
                      id="lastname"
                      type="text"
                      name="lastname"
                      placeholder="Nirmala"
                      value={data.lastname}
                      onChange={handleFormChange}
                      disabled={disabled}
                    ></input>
                    <br />
                    <input
                      className={style.gender}
                      id="gendermale"
                      type="radio"
                      name="gender"
                      value="male"
                      onChange={handleFormChange}
                      checked={data.gender === "male" && true}
                      disabled={disabled}
                    ></input>
                    <label htmlFor="gendermale">Male</label>
                    <input
                      className={style.gender}
                      id="genderfemale"
                      type="radio"
                      name="gender"
                      value="female"
                      checked={data.gender === "female" && true}
                      disabled={disabled}
                      onChange={handleFormChange}
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
