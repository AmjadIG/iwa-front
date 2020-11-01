import './App.css';
//import AlertsCenter from './components/Pages/AlertsCenter/AlertsCenter.js';
import Login from './components/Pages/Login/Login';
//import Footer from './components/Template/Footer/Footer';
import Header from './components/Template/Header/Header.js'
import Location from "./components/Location/Location";
import React from 'react';

function App() {
  return (
    <div className="App">
      <Header/>
      <Login/>
      <Location/>
    </div>
    
  );
}

export default App;
