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
  const [selectedCsp, setSelectedCsp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setloading] = useState(false);
  const [regions, setRegions] = useState([]);
  const [selectedCsps, setSelectedCsps] = useState([]);
  const [operators, setOperators] = useState([]);
  const [selectedOperator, setSelectedOperator] = useState("");

  useEffect(() => {
    const extractedRegions = dummyData?.map((data) => ({
      region: data?.region,
      val: data?.val,
    }));
    setRegions(extractedRegions);
  }, []);
  useEffect(() => {
    const selectedRegionData = dummyData?.find(
      ({ val }) => val === selectedItem
    );
    if (selectedRegionData) {
      const allOperators = selectedRegionData?.operators;
      setOperators(allOperators);
    } else {
      setOperators([]);
    }
  }, [selectedItem]);
  const handleSelectChange = (event) => {
    setSelectedItem(event.target.value);

    const selectedRegionData = dummyData?.find(
      (data) => data?.val === selectedItem
    );
    if (selectedRegionData) {
      setSelectedCsps(selectedRegionData?.csps);
      setSelectedCsp("");
      setSelectedOperator("");
      setloading(true);

      setTimeout(() => {
        setloading(false); 
      }, 1500);
    } else {
      setSelectedCsps([]);
      setSelectedCsp("");
      setSelectedOperator("");
    }
  };
  const handleCspChange = (event) => {
    const selectedCspValue = event.target.value;
    setSelectedCsp(selectedCspValue);
    setloading(true);

    setTimeout(() => {
      setloading(false); 
    }, 1500);
  };
  const handleOperatorChange = (event) => {
    setSelectedOperator(event.target.value);
    setloading(true);

    setTimeout(() => {
      setloading(false); 
    }, 1500);
  };
  return (
    <div>
      {loading && (
        <div id="loading">
          <div id="loading-center"></div>
        </div>
      )}
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
        operators={operators}
        selectedCsp={selectedCsp}
        handleCspChange={handleCspChange}
        isLoading={isLoading}
        setSelectedItem={setSelectedItem}
        handleSelectChange={handleSelectChange}
        regions={regions}
        selectedCsps={selectedCsps}
        selectedOperator={selectedOperator}
        handleOperatorChange={handleOperatorChange}
      />
      <Footer />
    </div>
  );
}

export default App;
