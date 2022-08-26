import logo from './logo.svg';
import './App.css';
import MainPage from './component/MainPage/MainPage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Profile from './component/CV_Profile/Profile'
import {Routes, Route, Link, NavLink } from "react-router-dom";
import Register from './component/Register_Login/RegisterPage';
import Login from './component/Register_Login/LoginPage';
import FindJob from './component/Job/FindJob';
import Header_CvCreate from './component/CV_Create/Header_CvCreate';
import Manager_CV from './component/CV_Create/Manager_CV';
import CV_Create from './component/CV_Create';


function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/profile" element={<Profile/>}/> 
          <Route path="/register" element={<Register/>}/>  
          <Route path="/login" element={<Login/>}/> 
          <Route path="/job" element={<FindJob/>}/> 
          <Route path='/cv_create' element={<CV_Create/>}></Route>
          <Route path="/" element={<MainPage/>}/>  
          
        </Routes>
      </div>
   
   
  );
}

export default App;
