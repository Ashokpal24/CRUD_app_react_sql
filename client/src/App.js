import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/js/dist/collapse.js";
import UserInfo from './components/UserInfo'
import Navbar from './components/Navbar';
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Userinfo' element={<UserInfo/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
