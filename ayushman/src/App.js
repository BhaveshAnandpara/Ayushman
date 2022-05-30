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

    
    <Search/>
      <div className='search-box '>
        <Search advanceSearch={false} />
      </div>

      <p>Advance Search</p>
      
      <div className='search-box '>
        <Search advanceSearch={true} />
      </div>

    </div>
  );
}

export default App;
