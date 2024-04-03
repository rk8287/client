import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import MainFooter from './components/Main-Footer/MainFooter.jsx';
import UserOption from './components/Header/UserOption.jsx';
import LoginRegister from './components/Auth/LoginRegister.jsx';
import Mytrip from './components/My-trip/Mytrip.jsx';
import MytripLogin from './components/My-trip/MytripLogin.jsx';



function App() {

  return (
    <Router>
      <Header />

      <UserOption/>

      <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/loginRegister" element={<LoginRegister/>} />
      <Route path="/myTrip" element={<Mytrip/>} />
      <Route path="/myTripLogin" element={<MytripLogin/>} />
      
        
      </Routes>

      <MainFooter/>
    </Router>
  );
}

export default App;
