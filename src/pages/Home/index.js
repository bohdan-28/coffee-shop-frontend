import React from "react";
import HomeGetStarted from "../../parts/home/GetStarted/HomeGetStarted";
import Navbar from "../../components/Navbar";
import TeamWork from "../../parts/home/TeamWork";
import PeopleFavorite from "../../parts/home/Favorite";
import VisitStore from "../../parts/home/VisitStore";
import Testimony from "../../parts/home/Testimony/index";

export default function index() {
  return (
    <div>
      <Navbar />
      <HomeGetStarted />
      <TeamWork />
      <PeopleFavorite />
      <VisitStore />
      <Testimony />
    </div>
  );
}
