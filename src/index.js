import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './component/Header/Header';
import resumeData from './resumeData';
import Footer from './component/Footer/Footer';
import Project from './component/Project/Project';
import About from './component/About/About';
import slidesgiven from './ProjectData.json'
import 'bootstrap/dist/js/bootstrap.js';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
// import $ from 'jquery';
// import Popper from 'popper.js';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Project  slidesgiven={slidesgiven}/>} />
        <Route path="/about" element={<About resumeData={resumeData}/>} />
      </Routes>
    </BrowserRouter>
    <Footer resumeData={resumeData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
