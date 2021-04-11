import React, { Component, Fragment } from "react";
import { Footer } from "../../components";
import Navbar from "../../components/Navbar";
import PartProfile from "../../parts/Profile";
import Sidebar from "../../components/Navbar/Sidebar";

class Profile extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        {/* <Sidebar /> */}
        <PartProfile />
        <Footer />
      </Fragment>
    );
  }
}

export default Profile;
