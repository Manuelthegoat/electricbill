import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Home from './Pages/Home';
import Routing from './Routes';
import Footer from './Components/Footer';
import { useState } from 'react';

function App() {
  const [selectedItem, setSelectedItem] = useState('HQ');

  const handleSelectChange = (event) => {
    setSelectedItem(event.target.value);
  };
  
  return (
    <div>
      {/* <div id="loading">
        <div id="loading-center">
        </div>
      </div> */}
      <div class="wrapper">
        <Sidebar />
        <Header selectedItem={selectedItem} handleSelectChange={handleSelectChange} />
      </div>
      <Routing selectedItem={selectedItem} />
      <Footer />
    </div>
  );
}

export default App;
