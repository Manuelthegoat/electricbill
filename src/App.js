import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Home from './Pages/Home';

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
      <Home />
    </div>
  );
}

export default App;
