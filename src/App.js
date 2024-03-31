import React from 'react';
import history from './services/history';
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Routes from "./routes";

import './App.css'

function App() {
  return (
    <Provider store={store}>
        <Router history={history}>
          <Routes />
        </Router>
    </Provider>
  );
}

export default App;
