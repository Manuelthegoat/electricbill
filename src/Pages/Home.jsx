import React from "react";
import HomeHead from "../Components/HomeHead";
import LoggedIn from "../Components/LoggedIn";
import Overview from "../Components/Overview";
import Regions from "../Components/Regions";
import KanoCentral from "./KanoCentral";
import KanoEast from "./KanoEast";
import KanoNorth from "./KanoNorth";
import KanoSouth from "./KanoSouth";
import KanoWest from "./KanoWest";
import MonthlyCollection from "./MonthlyCollection";

const Home = ({ selectedItem }) => {
  return (
    <>
      {selectedItem === "HQ" && (
        <div className="content-page">
          <div className="container-fluid">
            <div className="row">
              {/* <LoggedIn />
              <HomeHead /> */}
              <Regions
                title="Today Sales"
                titleV="2002"
                title2V="2003"
                title3V="2003"
                title2="Week Sales"
                title3="Month Sales"
              />
              <MonthlyCollection />

              <Overview />
            </div>
          </div>
        </div>
      )}
      {selectedItem === "KanoWest" && <KanoWest />}
      {selectedItem === "KanoCentral" && <KanoCentral />}
      {selectedItem === "KanoEast" && <KanoEast />}
      {selectedItem === "KanoNorth" && <KanoNorth />}
      {selectedItem === "KanoSouth" && <KanoSouth />}
    </>
  );
};

export default Home;
