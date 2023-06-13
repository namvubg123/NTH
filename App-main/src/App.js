// import Header from './components/Layout/Header';
// import Footer from './components/Layout/Footer';
// import Routersconfig from './config/Routersconfig';
import React from 'react';
import { GlobalProvider } from './GlobalContext';
import GlobalStyles from '../src/components/GlobalStyles/index';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import viVN from 'antd/locale/vi_VN';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <React.StrictMode>
        <ConfigProvider locale={viVN}>
          <GlobalStyles>
            <RouterProvider router={router} />
          </GlobalStyles>
        </ConfigProvider>
      </React.StrictMode>
    </GlobalProvider>
  );
}

export default App;
