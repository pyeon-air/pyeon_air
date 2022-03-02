import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from "react-redux";
// import { applyMiddleware, createStore } from "redux";
// import promiseMiddlerware from "redux-promise";
// import reduxThunk from "redux-thunk";
import App from './App';




ReactDOM.render(
  <BrowserRouter>
  <App />
</BrowserRouter>,
  document.getElementById('root')
);

