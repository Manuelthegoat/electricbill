import React from "react";
import HomeHead from "../Components/HomeHead";
import LoggedIn from "../Components/LoggedIn";
import Overview from "../Components/Overview";
import Regions from "../Components/Regions";

const Home = () => {
  return (
    <>
      <div className="content-page">
        <div className="container-fluid">
          <div className="row">
            <LoggedIn />
            <HomeHead />
            {/* <Regions /> */}
            <Overview />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
