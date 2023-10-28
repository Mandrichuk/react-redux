import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from "./features/user.js";
import themeReducer from "./features/theme.js";
import App from './App.js';



const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
