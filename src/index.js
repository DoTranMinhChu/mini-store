import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from "react";
import './index.css';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import rootReducer from './stores/reducers/rootReducer'
import { Provider } from 'react-redux';
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const reduxReact = createStore(rootReducer);
root.render(
  <StrictMode>
    <Provider store={reduxReact}>
      <App />
    </Provider>

  </StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
