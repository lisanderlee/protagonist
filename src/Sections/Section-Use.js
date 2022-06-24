import './Sections.css'
import Absolut from './Assets/Absolut.gif'
import Metamask from './Assets/metamask.svg'
import web3 from './Assets/web3.svg'
import js from './Assets/javascript.svg'
import decentraland from './Assets/decentraland.svg'


export default function Use() {
    return (
      <>
      <div className="use container section">
      <div className='column'>
          <div className='use-image image-border'>
              <img src={Absolut} alt="Absolut" />
          </div>
      </div>
      <div className='column'>
          <div className="use-title title">
            <h3>TECHNOLOGIES</h3>
          </div>
          <div className="use-copy body-copy"> 
          <p>From virtual experiences to branded platforms and infrastructures for your web 3 strategy – the Protagonist team opens limitless possibilities
            in the metaverse.</p>
          </div>
          <div className='tech-logos'>
          <img src={decentraland} alt="decentrland" />
          <img src={Metamask} alt="Metamask" />
          <img src={web3} alt="web3" />
          <img src={js} alt="js" />
       
          </div>
      </div>
      </div>
      </>
    )
  }