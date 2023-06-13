// import { ConfigProvider } from 'antd';
// import viVN from 'antd/locale/vi_VN';
// import { RouterProvider } from 'react-router-dom';
// import GlobalStyles from '../src/components/GlobalStyles/index';
// import { router } from './router';
// import { GlobalContext } from './GlobalContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
