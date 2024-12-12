import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userSlice from './redux/userSlice';
import loadingSlice from './redux/loadingSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let store = configureStore({
  reducer: {
    userSlice: userSlice,
    loadingSlice: loadingSlice,
  }
})
if (!root) {
  root = createRoot(rootElement);
}
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);
