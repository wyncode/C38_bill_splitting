import React, { useState, useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';
import ContextDemo from './components/ContextDemo';
import Navigation from './components/Navigation';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import SignUp from './components/SignUp/SignUp';
import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  // const [serverMessage, setServerMessage] = useState('');

  // const fetchDemoData = () => {
  //   fetch('/api/demo')
  //     .then((response) => response.json())
  //     .then((data) => setServerMessage(data.message));
  // };

  // useEffect(fetchDemoData, []);

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
