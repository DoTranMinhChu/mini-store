import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from "react";
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import rootReducer from './stores/reducers/rootReducer'
import { Provider } from 'react-redux';
import './styles/index.scss'
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


reportWebVitals();
