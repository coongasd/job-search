import logo from './logo.svg';
import './App.css';
import MainPage from './component/MainPage/MainPage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Profile from './component/CV_Profile/Profile'
import {Routes, Route, Link, NavLink } from "react-router-dom";

function App() {
  return (
      
      <div className="App">
        <Routes>
          <Route path="/profile" element={<Profile/>}/>  
          <Route path="/" element={<MainPage/>}/>  
        </Routes>
      </div>
   
   
  );
}

export default App;
