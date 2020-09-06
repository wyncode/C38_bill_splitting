import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoutes';
import Profile from './pages/Profile';
import About from './pages/About';
import BillPage from './pages/BillPage';
import ResetPassword from './pages/ResetPassword';
import UpdatePassword from './pages/UpdatePassword';

import './App.css';

const App = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <AppContextProvider>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/about" component={About} />
              <Route exact path="/reset-password" component={ResetPassword} />
              <Route exact path="/update-password" component={UpdatePassword} />
              <PrivateRoute exact path="/home" component={Home} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/billpage" component={BillPage} />
            </Switch>
          </BrowserRouter>
        </AppContextProvider>
      </div>
    </div>
  );
};

export default App;
