import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider, Route, Link, } from "react-router-dom";
import Navigationbar from './components/Navigationbar';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Oscilloscope from './components/post/Oscilloscope';
import PortfolioSite from './components/post/PortfolioSite';
import Covfefe from './components/post/Covfefe';
import SomsriBook from './components/post/SomsriBook';
import CryptoGUI from './components/post/CryptoGUI';
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  
  {
    path: "aboutme",
    element: <AboutMe />,
  },
  {
    path: "/work/covfefe",
    element: <Covfefe />,
  },
  {
    path: "/work/crypto",
    element: <CryptoGUI />,
  },
  {
    path: "/work/oscilloscope",
    element: <Oscilloscope />,
  },
  {
    path: "/work/somsri",
    element: <SomsriBook />,
  },
  {
    path: "/work/portfolio",
    element: <AboutMe />,
  },
  {
    path: "*",
    element: (
      <App />
    ),
  },
]);



root.render(
  <React.StrictMode>
    <Navigationbar />
      <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
