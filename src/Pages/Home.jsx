import React from "react";
import { useNavigate } from "react-router-dom";
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

const Home = ({ handleSelectChange, selectedItem, setSelectedItem }) => {
  const number = 2003883; // Replace with your number
  const formattedNumber = number.toLocaleString();
  const navigate = useNavigate();
  if (selectedItem === "Remitance") {
    navigate("/remittance");
    window.location.reload();
  }
  return (
    <>
      {selectedItem === "HQ" && (
        <div className="content-page">
          <div className="container-fluid">
            <div className="row mb-3">
              <div className="col-lg-2">
                <select
                  name="type"
                  class=" form-control"
                  value={selectedItem}
                  onChange={handleSelectChange}
                  data-style="py-0"
                >
                  <option value="" selected>
                    Choose Option
                  </option>
                  <option value="">Transaction</option>
                  <option value="">Transaction List</option>
                  <option value="">Performance</option>
                  <option value="Remitance">Remittance</option>
                  <option value="">Summary</option>
                  <option value="">Analysis</option>
                  <option value="">Remit Sales</option>
                  <option value="">NonRemit Sales</option>
                  <option value="">Reprint/Cancellations</option>
                </select>
              </div>
              <div className="col-lg-2 d-flex">
                <input
                  type="date"
                  class="form-control"
                  placeholder="mm/dd/yyyy"
                />
              </div>
              <div className="col-lg-2">
                <select
                  name="type"
                  class=" form-control"
                  // value={selectedItem}
                  // onChange={handleSelectChange}
                >
                  <option value="" selected>
                    Select A Region
                  </option>
                  <option value="">HQ</option>
                  <option value="KanoWest">Kano West</option>
                  <option value="KanoCentral">Kano Central</option>
                  <option value="KanoEast">Kano East</option>
                  <option value="KanoNorth">Kano North</option>
                  <option value="KanoSouth">Kano South</option>
                  <option value="KanoSouth">Jigawa South</option>
                  <option value="KanoSouth">Jigawa North</option>
                  <option value="KanoSouth">Katsina Central</option>
                  <option value="KanoSouth">Katsina North</option>
                  <option value="KanoSouth">Katsina South</option>
                </select>
              </div>

              <div className="col-lg-2">
                <select name="" id="" className="form-control">
                  <option value="">Choose Csp</option>
                  <option>Ajingi</option>
                  <option>Albasu</option>
                  <option>Bagwai</option>
                  <option>Bebeji</option>
                  <option>Bichi</option>
                  <option>Bunkure</option>
                  <option>Dala</option>
                  <option>Dambatta</option>
                  <option>Dawakin Kudu</option>
                  <option>Dawakin Tofa</option>
                  <option>Doguwa</option>
                  <option>Fagge</option>
                  <option>Gabasawa</option>
                  <option>Garko</option>
                  <option>Garum Mallam</option>
                  <option>Gaya</option>
                  <option>Gezawa</option>
                  <option>Gwale</option>
                  <option>Gwarzo</option>
                  <option>Kabo</option>
                  <option>Kano Municipal</option>
                  <option>Karaye</option>
                  <option>Kibiya</option>
                  <option>Kiru</option>
                  <option>Kumbotso</option>
                  <option>Kunchi</option>
                  <option>Kura</option>
                  <option>Madobi</option>
                  <option>Makoda</option>
                  <option>Minjibir</option>
                  <option>Nasarawa</option>
                </select>
              </div>
              <div className="col-lg-2">
                <select name="" id="" className="form-control">
                  <option value="">Choose Operator</option>
                </select>
              </div>
              <div className="col-lg-2">
                <button className="btn btn-primary">Search</button>
              </div>
            </div>
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
      {selectedItem === "KanoWest" && <KanoWest />}
      {selectedItem === "KanoCentral" && <KanoCentral />}
      {selectedItem === "KanoEast" && <KanoEast />}
      {selectedItem === "KanoNorth" && <KanoNorth />}
      {selectedItem === "KanoSouth" && <KanoSouth />}
    </>
  );
};

export default Home;
