import SideBar from "./components/sidebar/SideBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/home/Home';
import TopBar from "./components/topbar/TopBar";

function App() {
  return (
    <div>
      <TopBar />
   <div className="down">
        <SideBar />
        <Home />
      </div>
    </div>
   
  );
}

export default App;
