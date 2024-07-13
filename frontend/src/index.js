import React from 'react';
import ReactDOM from 'react-dom/client';
import 'glider-js/glider.min.css';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react'

import reduxStore from './redux';

const { store, persistor } = reduxStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <PersistGate loading={null} persistor={persistor} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>

);

