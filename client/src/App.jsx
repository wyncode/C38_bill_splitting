import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
import Navigation from './components/Navigation';
import PrivateRoute from './components/PrivateRoutes';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import BillPage from './components/BillPage/BillPage';
import TestHome from './components/HomePage/TestHome';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <AppContextProvider>
          <BrowserRouter>
            <Navigation />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/signup" component={SignUpPage} />
              <Route exact path="/billpage" component={BillPage} />
              <Route exact path="/testhome" component={TestHome} />
              <PrivateRoute exact path="/home" component={TestHome} />
              {/* <PrivateRoute exact path="/profile" component={Profile} /> */}
            </Switch>
          </BrowserRouter>
        </AppContextProvider>
      </div>
    </div>
  );
};

export default App;
