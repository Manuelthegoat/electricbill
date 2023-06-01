import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Home from './Pages/Home';
import Routing from './Routes';

function App() {
  return (
    <div>
      {/* <div id="loading">
        <div id="loading-center">
        </div>
      </div> */}
      <div class="wrapper">
        <Sidebar />
        <Header />
      </div>
      <Routing />
    </div>
  );
}

export default App;
