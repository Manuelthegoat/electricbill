import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Routing from "./Routes";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import dummyData from "./dummyData";

function App() {
  const [selectedItem, setSelectedItem] = useState("HQ");
  const [isLoading, setIsLoading] = useState(false);
  const [regions, setRegions] = useState([]);
  const [selectedCsps, setSelectedCsps] = useState([]);

  useEffect(() => {
    const extractedRegions = dummyData?.map((data) => ({
      region: data?.region,
      val: data?.val,
    }));
    setRegions(extractedRegions);
  }, []);
  const handleSelectChange = (event) => {
    setSelectedItem(event.target.value);
    
    const selectedRegionData = dummyData?.find(
      (data) => data?.val === selectedItem
    );
    if (selectedRegionData) {
      setSelectedCsps(selectedRegionData?.csps);
    } else {
      setSelectedCsps([]);
    }
  };
  // console.log(dummyData)

  return (
    <div>
      {/* <div id="loading">
        <div id="loading-center">
        </div>
      </div> */}
      <div class="wrapper">
        <Sidebar />
        <Header
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          handleSelectChange={handleSelectChange}
        />
      </div>
      <Routing
        selectedItem={selectedItem}
        isLoading={isLoading}
        setSelectedItem={setSelectedItem}
        handleSelectChange={handleSelectChange}
        regions={regions}
        selectedCsps={selectedCsps}
      />
      <Footer />
    </div>
  );
}

export default App;
