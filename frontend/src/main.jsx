import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { ChakraProvider } from '@chakra-ui/react';
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
