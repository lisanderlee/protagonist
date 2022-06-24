import React from 'react';
import './footer.css';
import logo from './logo.png'

export default function Footer() {
    return (
      <>
      <div className="footer container column ">
   
            <div className="logo footer-logo" >
              <img src={logo} alt="logo" />
              <div className="logo-divider"></div>
              <div className="logo-text">PROTAGONIST</div>
            </div>
            <div className='footer-text body-copy'>
              <p>"In thre real world, Hiro Protagonist delivers pizza, but in the Metaverse he's a warrior prince" <br/> - Neal Stephenos, Snow Crash </p>
            </div>
          
            <div className='footer-rights'> 
              <p>@2021 Protagonist.Land All rights reserved.</p>
            </div>
      </div>
     
      </>
    )
  }