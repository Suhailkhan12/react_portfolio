import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import profilepic from '../asset/images/profilepic.png';
import Resume from '../asset/images/Resume.pdf';




class Header extends Component {
    constructor(){
        super();
        this.state={
            show: true
        }
    }

    
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark ">
                <div className="container-fluid mx-5">
                    <Link className="navbar-brand" to="/">
                      <img className='img-fluid profile-pic' src={profilepic} alt="Navbar" />
                    </Link>
                    <button className="navbar-toggler" 
                    onClick={ () => {this.setState({show: !this.state.show})} } >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={this.state.show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'} >
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                              <Link className="nav-link text-dark mx-2" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link text-dark mx-2" to="/projects">Projects</Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link text-dark mx-2" to={Resume} download="Resume" target="_blank" rel="noreferrer">Resume</Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link text-dark mx-2" to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}


export default Header;