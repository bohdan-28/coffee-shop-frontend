import React from "react";
import HomeGetStarted from "../../parts/Home/GetStarted/HomeGetStarted";
import Navbar from "../../components/Navbar";
import TeamWork from "../../parts/Home/TeamWork";
import PeopleFavorite from "../../parts/Home/Favorite";
import VisitStore from "../../parts/Home/VisitStore";
import Testimony from "../../parts/Home/Testimony/index";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Navbar/Sidebar";

function Home() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <HomeGetStarted />
      <TeamWork />
      <PeopleFavorite />
      <VisitStore />
      <Testimony />
      <Footer />
    </div>
  );
}

export default Home;
