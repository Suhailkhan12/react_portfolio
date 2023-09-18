import React, { Component } from 'react';
import './Footer.css';
import github from '../asset/images/github.png';
import whatsapp from '../asset/images/whatsapp.png';
import linkedin from '../asset/images/linkedin.png'


class Footer extends Component {
    
    render() {

      let resumeData = this.props.resumeData;

        return(
          
            <footer class="text-center text-lg-start text-muted">
              <section class="d-flex justify-content-center justify-content-lg-between p-2 mx-5 border-bottom">
                <div class="me-5 d-none d-lg-block text-dark">
                  <span>Profile links:</span>
                </div>
                <div>
                {
                  resumeData.socialLinks && resumeData.socialLinks.map((items)=>{
                    return(
                      <a href={items.url} class="me-4 text-reset">
                         <img className='img-fluid' src={items.name} alt="Navbar" />
                      </a>
                    )
                  })
                }
                </div>
               </section>
            </footer>
        );
    }
}


export default Footer;