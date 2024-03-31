import React from 'react';
import history from './services/history';
import { ToastContainer } from "react-toastify";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Routes from "./routes";

import GlobalStyles from './styles/GlobalStyles';
import './App.css'

function App() {
  return (
    <Provider store={store}>
        <Router history={history}>
          <Routes />
          <GlobalStyles />
          <ToastContainer autoClose={3000} className="toast-container" />
        </Router>
    </Provider>
  );
}

export default App;
