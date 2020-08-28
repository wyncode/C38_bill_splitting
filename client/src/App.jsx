import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
import Navigation from './components/Navigation';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import BillPage from './pages/BillPage';
import './App.css';

const App = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <AppContextProvider>
          <BrowserRouter>
            <Navigation />
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/billpage" component={BillPage} />
            </Switch>
          </BrowserRouter>
        </AppContextProvider>
        <Footer />
      </div>
    </div>
  );
};

export default App;
