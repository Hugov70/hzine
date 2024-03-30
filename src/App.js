import React from 'react';
import history from './services/history';
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store from "./store";


import Routes from "./routes";
import GlobalStyles from "./styles/GlobalStyles";

import './App.css'

function App() {
  return (
    <Provider store={store}>
        <Router history={history}>
          <Routes />
          <ToastContainer autoClose={30} className="toast-container" />
        </Router>
    </Provider>
  );
}

export default App;
