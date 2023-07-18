import React from "react";
import { useNavigate } from "react-router-dom";
import HomeHead from "../Components/HomeHead";
import LoggedIn from "../Components/LoggedIn";
import Overview from "../Components/Overview";
import Regions from "../Components/Regions";
import RegionsComponents from "../Components/RegionsComponents";
import KanoCentral from "./KanoCentral";
import KanoEast from "./KanoEast";
import KanoNorth from "./KanoNorth";
import KanoSouth from "./KanoSouth";
import KanoWest from "./KanoWest";
import MonthlyCollection from "./MonthlyCollection";

const Home = ({
  handleSelectChange,
  regions,
  selectedItem,
  setSelectedItem,
  isLoading,
  selectedCsps,
  selectedCsp,
  handleCspChange,
  operators,
}) => {
  const number = 2003883; // Replace with your number
  const formattedNumber = number.toLocaleString();
  const navigate = useNavigate();
  if (selectedItem === "Remitance") {
    navigate("/remittance");
    window.location.reload();
  }
  if (selectedItem === "Transactions") {
    navigate("/transactions");
    window.location.reload();
  }

  return (
    <>
      {selectedItem === "HQ" && (
        <div className="content-page">
          <div className="container-fluid">
            <RegionsComponents
              handleSelectChange={handleSelectChange}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              isLoading={isLoading}
              regions={regions}
              selectedCsps={selectedCsps}
              handleCspChange={handleCspChange}
              selectedCsp={selectedCsp}
              operators={operators}
            />
            <div className="row">
              {/* <LoggedIn />
              <HomeHead /> */}
              <Regions
                title="Today Sales"
                titleV={formattedNumber}
                title2V={formattedNumber}
                title3V={formattedNumber}
                title4V={formattedNumber}
                title5V={formattedNumber}
                title2="Week Sales"
                title3="Month Sales"
                title4="Remit Sales"
                title5="Un-Remit Sales"
              />
              <MonthlyCollection />

              <Overview />
            </div>
          </div>
        </div>
      )}
      {selectedItem === "KanoWest" && (
        <KanoWest
          handleSelectChange={handleSelectChange}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          regions={regions}
          selectedCsps={selectedCsps}
          csping={selectedCsp}
          selectedCsp={selectedCsp}
          handleCspChange={handleCspChange}
          operators={operators}
         
        />
      )}
      {selectedItem === "KanoCentral" && (
        <KanoCentral
          handleSelectChange={handleSelectChange}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          regions={regions}
          selectedCsps={selectedCsps}
        />
      )}
      {selectedItem === "KanoEast" && (
        <KanoEast
          handleSelectChange={handleSelectChange}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          regions={regions}
          selectedCsps={selectedCsps}
        />
      )}
      {selectedItem === "KanoNorth" && (
        <KanoNorth
          handleSelectChange={handleSelectChange}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          regions={regions}
          selectedCsps={selectedCsps}
        />
      )}
      {selectedItem === "KanoSouth" && (
        <KanoSouth
          handleSelectChange={handleSelectChange}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          regions={regions}
          selectedCsps={selectedCsps}
        />
      )}
    </>
  );
};

export default Home;
