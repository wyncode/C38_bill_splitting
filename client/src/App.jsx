import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import BillPage from './pages/BillPage';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoutes';
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
              <Route exact path="/billpage" component={BillPage} />
              <PrivateRoute exact path="/home" component={Home} />
              {/* <PrivateRoute exact path="/profile" component={Profile} /> */}
            </Switch>
          </BrowserRouter>
        </AppContextProvider>
      </div>
    </div>
  );
};

export default App;
