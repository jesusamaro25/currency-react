import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { AppRouter } from './router/AppRouter';
import { useLocation, useNavigate } from 'react-router-dom';

const App = () => {


  const location = useLocation();
  const navigateTo = useNavigate();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  const goToRate = () => {
    navigateTo('/rate')
  };

  const goToHistory = () => {
    navigateTo('/history')
  };

  return (
    <React.Fragment>
      <div className='container main-div'>
        <div className='mb-3'>
          <p className='title-text mb-3'>CURRENCY</p>
          <button onClick={goToRate} className={splitLocation[1] === "" || splitLocation[1] === "rate" ? "active" : "button-width"}>GET RATE</button>
          <button onClick={goToHistory} className={splitLocation[1] === "history" ? "active ml-2" : "button-width ml-2"}>RATE 30 DAY HISTORY</button>
        </div>
        <AppRouter />
      </div>
    </React.Fragment>
  );

}

export default App;
