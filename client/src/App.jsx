import React, { useState, useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';
import ContextDemo from './components/ContextDemo';
import Navigation from './components/Navigation';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import SignUp from './components/SignUp/SignUp';
import Footer from './components/Footer/Footer.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Navigation />
        <HomePage />
        {/* <LoginPage />
        <SignUp />
        <ContextDemo /> */}
        <Footer />
      </AppContextProvider>
    </BrowserRouter>
  );
};

export default App;
