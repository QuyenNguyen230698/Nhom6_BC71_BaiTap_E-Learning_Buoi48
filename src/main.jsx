import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userSlice from './redux/userSlice';
import loadingSlice from './redux/loadingSlice';
import App from './App';
import './index.css';

// Create the Redux store
export let store = configureStore({
  reducer: {
    userSlice: userSlice,
    loadingSlice: loadingSlice,
  }
});

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
