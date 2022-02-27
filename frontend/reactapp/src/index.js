import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import promiseMiddlerware from "redux-promise";
import reduxThunk from "redux-thunk";
import App from './App';


const createStoreWidthMiddleware = applyMiddleware(
  promiseMiddlerware,
  reduxThunk
)(createStore);


ReactDOM.render(
  // Redux 할때 필요 
  <Provider store={createStoreWidthMiddleware( 
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()) }>
  <BrowserRouter>
  <App />
</BrowserRouter>
</Provider>,
  document.getElementById('root')
);

