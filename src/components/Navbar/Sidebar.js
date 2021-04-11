import { Fragment, React, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../configs/redux/actions/user";
import Swal from "sweetalert2";

import Style from "./sidebar.module.css";


function Sidebar() {
    const ImgUrl = process.env.REACT_APP_API_IMG;

    const history = useHistory();

    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.user);

    const [select, setSelect] = useState(false);

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



    const handleSelected = () => {
        if (!select) {
            setSelect(true);
        } else {
            setSelect(false);
        }
    }


    const handleClickSignUp = () => {
        history.push("/sign-up");
    };

    const handleClickLogin = () => {
        history.push("/login");
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            dispatch(getUser());
        }
    }, [dispatch]);

    const isAuthenticated = localStorage.getItem("token");


    if (!isAuthenticated) {
        return (
            <Fragment>
                <div className={Style.wrapper}>
                    {!select ? (
                        <nav id={Style.sidebar}>
                            <div className={Style['side-profiles']}>
                                <div id={Style.dismiss} onClick={handleSelected}>
                                    <i className="fas fa-arrow-left"></i>
                                </div>
                                <p className={Style['title-sidebar']}>Welcome!</p>
                                <p className={Style['subtitle-sidebar']}>Get a cup of coffee for free only for new user</p>
                                <div className={Style['btn-side']}>
                                    <button
                                        type="button"
                                        className={[["btn"], Style["nav-signin-sidebar"]].join(" ")}
                                        onClick={() => handleClickLogin()}
                                    >
                                        Login
                                    </button>
                                    <button
                                        type="button"
                                        className={[["btn"], Style["nav-btn-signup-side"]].join(" ")}
                                        onClick={() => handleClickSignUp()}
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </nav>
                    ) : (
                        ""
                    )}
                    <div id={Style.content}>
                        <button type="button" id={Style['sidebarCollapse']} className="btn " onClick={handleSelected}>
                            <i className="fas fa-align-left"></i>
                            <span></span>
                        </button>
                    </div>
                </div>
                <div className={Style.overlay}></div>

            </Fragment >
        );
    }
    return (
        <Fragment>
            <div className={Style.wrapper}>
                {!select ? (
                    <nav id={Style.sidebar}>
                        <div className={Style['side-profile']}>
                            <div id={Style.dismiss} onClick={handleSelected}>
                                <i className="fas fa-arrow-left"></i>
                            </div>
                            <div className="">
                                {user.image ? (
                                    <img
                                        className={Style["profile-img"]}
                                        src={`${ImgUrl}${user.image}`}
                                        alt="ImgUser"
                                    />
                                ) : (
                                    ""
                                )}

                                {user.username ? (
                                    <div className={Style["username-side"]}>
                                        {user.username}
                                    </div>
                                ) : (
                                    ""
                                )}

                                {user.email ? (
                                    <div className={Style["email-side"]}>
                                        {user.email}
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                        <div className={Style["navbar-side"]}>
                            <Link
                                className={Style["dropdown-item-sidebar"]}
                                to="/profile"
                            >
                                <i className="fas fa-user-circle"></i>
                                Edit Profile
                            </Link>
                            <hr />
                            <Link
                                className={Style["dropdown-item-sidebar"]}
                                to="#"
                            >
                                <i className="fas fa-shopping-cart"></i>
                                Orders
                            </Link>
                            <hr />
                            <Link
                                className={Style["dropdown-item-sidebar"]}
                                to="#"
                            >
                                <i className="fas fa-list-alt"></i>
                                All Menu
                            </Link>
                            <hr />
                            <Link
                                className={Style["dropdown-item-sidebar"]}
                                to="#"
                            >
                                <i className="fas fa-file"></i>
                                Privacy policy
                            </Link>
                            <hr />
                            <Link
                                className={Style["dropdown-item-sidebar"]}
                                to="#"
                            >
                                <i className="fas fa-lock"></i>
                                Security
                            </Link>
                            <Link
                                onClick={handleLogout}
                                className={Style["dropdown-item-logout"]}
                                to="#"
                            >
                                Sign-Out
                            </Link>
                        </div>
                    </nav>
                ) : (
                    ""
                )}

                <div id={Style.content}>
                    <button type="button" id={Style['sidebarCollapse']} className="btn " onClick={handleSelected}>
                        <i className="fas fa-align-left"></i>
                        <span></span>
                    </button>
                </div>
            </div>
            <div className={Style.overlay}></div>

        </Fragment >
    );
}

export default Sidebar;
