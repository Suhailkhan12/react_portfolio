import React, { Component } from 'react';
import './About.css';
import HTML from '../asset/images/HTML.png';
import CSS from '../asset/images/CSS.png';
import JS from '../asset/images/JS.png';
import bootstrap from '../asset/images/bootstrap.webp';
import REACT from '../asset/images/REACT.png';
import MYSQL from '../asset/images/MYSQL.png';




export default class Home extends Component {
    render() {
      let resumeData = this.props.resumeData;
  
      return (
        <div> 
          <section className='container-fluid py-4'>
            <div className='container'>
              <div className='row'>
                <div className='col-12 d-flex flex-column justify-content-center align-items-start'>
                  <h2><span className='weave'>About</span></h2>
                  <p>{resumeData.aboutDescription}</p>
                </div>
                <div className='row py-4'>
                  <div className='col-lg-4 col-12 d-flex flex-column justify-content-center align-items-start'>
                      <div className='row'>
                        <div className='col-4'><img className="img-fluid bg-transparent imgrotate" width="100%" src={ HTML } alt=""/></div>
                        <div className='col-4'><img className="img-fluid bg-transparent imgrotate" width="100%" src={ CSS } alt=""/></div>
                        <div className='col-4'><img className="img-fluid bg-transparent imgrotate" width="100%" src={ JS } alt=""/></div>
                      </div>
                      <div className='row mt-3'>
                        <div className='col-4'><img className="img-fluid bg-transparent imgrotate" width="100%" src={ bootstrap } alt=""/></div>
                        <div className='col-4'><img className="img-fluid bg-transparent imgrotate" width="100%" src={ REACT } alt=""/></div>
                        <div className='col-4'><img className="img-fluid bg-transparent imgrotate" width="100%" src={ MYSQL } alt=""/></div>
                      </div>
                  </div>
                  <div className='col-lg-8 col-12 d-flex flex-column justify-content-start align-items-start px-5'>
                    <h2>{resumeData.skillsDescription}</h2>
                    <div className='container row my-4'>
                      <div className='col-6'>
                        <ul className='fs-4 listarrow'>
                          {
                            resumeData.skills && resumeData.skills.map((item)=>{
                              return(
                                <li>
                                  {item.skillname}
                                </li>
                              )
                            })
                          }
                        </ul>
                      </div>
                      <div className='col-6 d-flex flex-column justify-content-start align-items-'>
                        <ul className='fs-4 listarrow'>
                          {
                            resumeData.skillstwo && resumeData.skillstwo.map((item)=>{
                              return(
                                <li>
                                  {item.skillname}
                                </li>
                              )
                            })
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }
  }