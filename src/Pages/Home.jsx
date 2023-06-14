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

const Home = ({ selectedItem }) => {
  return (
    <>
      {selectedItem === "HQ" && (
        <div className="content-page">
          <div className="container-fluid">
            <div className="row">
              <LoggedIn />
              <HomeHead />
              <Regions />
              <Overview />
            </div>
          </div>
        </div>
      )}
      {selectedItem === 'KanoWest' && <KanoWest />}
      {selectedItem === 'KanoCentral' && <KanoCentral />}
      {selectedItem === 'KanoEast' && <KanoEast />}
      {selectedItem === 'KanoNorth' && <KanoNorth />}
      {selectedItem === 'KanoSouth' && <KanoSouth />}
    </>
  );
};

export default Home;
