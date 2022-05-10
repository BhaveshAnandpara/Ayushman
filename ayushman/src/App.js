import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home'
import ApproximateCost from './Pages/Approximate-Cost/Approximate-cost'
import Feedback from './Pages/Feedback/Feedback'
import Login from './Pages/Login/Login'
import HospitalCard from './Components/HospitalCards/HospitalCards'

import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';


function App() {
  return (
    <div className="App">

      {/* <Header/>
      <Navbar />
      <HospitalCard/> */}
      <Login/>

    </div>
  );
}

export default App;
