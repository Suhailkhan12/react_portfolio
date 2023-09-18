import React, { Component } from 'react';
import './Home.css'
import ReactTyped from "react-typed";
import { Tilt } from 'react-tilt'
import profile from '../asset/images/profile.png'
import { Link } from 'react-router-dom';
import Resume from '../asset/images/Resume.pdf';

const defaultOptions = {
	reverse:        true,  
	max:            35,     
	perspective:    1000,  
	scale:          1,    
	speed:          1000,   
	transition:     true,  
	axis:           null,  
	reset:          true,    
	easing:         "cubic-bezier(.03,.98,.52,.99)",  
}


export default class Home extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <div id="container"> 
        <div className='row d-flex justify-content-center align-items-center'>
          <div className='col-lg-6 col-12 text-center bg-transparent'>
              {/* <img className="img-fluid"  src={resumeData.imagebaseurl} alt="" /> */}
              <Tilt options={defaultOptions}>
                <div className='mask'><img className="img-fluid bg-transparent" width="45%" src={ profile} alt=""/></div>
              </Tilt>
          </div>
          <div className='col-lg-6 col-12 d-flex justify-content-lg-start justify-content-center align-items-center '>
            <div>
              <div className='text-start'>
                <h5 className="subheading" style={{color: "#2d7084"}}>Hi, my name is</h5>
                <h1 className='stroketext'>{resumeData.name}</h1>
                {" "}
                <ReactTyped className='typed-font' strings={resumeData.quality} typeSpeed={100} loop />
                <div className='d-flex mt-3'>
                  <Link to='/projects' className='text-decoration-none float-left'><button className="button-new">&nbsp;</button></Link>
                  <Link className="nav-link text-dark mx-2" to={Resume} download="Resume" target="_blank" rel="noreferrer"><button className="button button-2">Download Resume</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        );
  }
}














