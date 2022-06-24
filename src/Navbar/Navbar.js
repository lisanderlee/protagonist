import "./Navbar.css";
import logo from './logo.png'

export default function NavbarComponent({scroll}) {

    return ( 
    <div   className="header container">
        <div className="logo" >
           <img src={logo} alt="logo" />
           <div className="logo-divider"></div>
           <div className="logo-text">PROTAGONIST </div>
        </div>
         <div >{scroll}</div>
        <button className="header-cta" >
           Let's Chat
        </button>  
    </div>   
    )
  }

 