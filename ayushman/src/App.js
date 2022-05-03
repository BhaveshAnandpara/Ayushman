import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home'
import ApproximateCost from './Pages/Approximate-Cost/Approximate-cost'
import Feedback from './Pages/Feedback/Feedback'
import Login from './Pages/Login/Login'


function App() {
  return (
    <div className="App">
      <Home/>
      <ApproximateCost/>
      <Feedback/>
      <Login/>
    </div>
  );
}

export default App;
