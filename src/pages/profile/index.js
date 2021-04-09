import React, { Component, Fragment } from "react";
import { Footer } from "../../components";
import Navbar from "../../components/Navbar";
import PartProfile from "../../parts/Profile";

class Profile extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <PartProfile />
        <Footer />
      </Fragment>
    );
  }
}

export default Profile;
