import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Project from './component/Project/Project';
import slidesgiven from './ProjectData.json'
import 'bootstrap/dist/js/bootstrap.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import $ from 'jquery';
// import Popper from 'popper.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "projects",
    element: <Project slidesgiven={slidesgiven} />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
