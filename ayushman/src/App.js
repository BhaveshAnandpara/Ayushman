import logo from './logo.svg';
import './App.css';

import Home from './Pages/Home/Home'
import ApproximateCost from './Pages/Approximate-Cost/Approximate-cost'
import Feedback from './Pages/Feedback/Feedback'
import Login from './Pages/Login/Login'
import HospitalCard from './Components/HospitalCards/HospitalCards'

import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import HospitalProfile from './Components/HospitalProfile/HospitalProfile';
import Search from './Components/Search/Search.jsx';
import AdvanceSearch from './Components/AdvanceSearch/AdvanceSearch';



function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />

<<<<<<< HEAD
    
    <Search/>
=======
      <div className='search-box '>
        <Search advanceSearch={false} />
      </div>

      <p>Advance Search</p>
      
      <div className='search-box '>
        <Search advanceSearch={true} />
      </div>
>>>>>>> 646eb5913be94b0f01c6a2257228a320e6a929b1

    </div>
  );
}

export default App;
