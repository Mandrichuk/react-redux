import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './App.js';
import userReducer from "./features/user.js";
import themeReducer from "./features/theme.js";
import bgcolorReducer from "./features/bgcolor.js";
import counterReducer from "./features/counter.js";


const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    bgcolor: bgcolorReducer,
    counter: counterReducer,
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
