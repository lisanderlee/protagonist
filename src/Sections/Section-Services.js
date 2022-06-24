import './Sections.css'
import turnkey from './Assets/turnkey.png'
import idea from './Assets/idea.png'
import rep from './Assets/rep.png'
import xr from './Assets/xr.png'
import rent from './Assets/rental.png'
import coin from './Assets/coin.png'

export default function Services() {
    return (
      <>
      <div className="services container section">
        <div className="services-title title">
          <h3>OUR SERVICES</h3>
          <p className="body-copy">Mixing ceativity with technology to create compeling stories that drive real results.</p>
        </div>
  
        <div className="services-content">
          <div className="services-content-column row">
         
          <div className='divisor'></div>
            <div className="services-item">
            <img src={turnkey} alt="Absolut" />
              <div className="services-item-tittle subtitle"> 
                <h4>Turnkey Experiences</h4>
              </div>
              <div className="services-item-copy body-copy">
                <p>We deal with the ideation, UX and UI design, 3d modeling, deployment, and maintenance of your Metaerse experience.</p>
              </div>
            </div>

            <div className="services-item">
            <img src={rent} alt="Absolut" />
              <div className="services-item-tittle subtitle">
                <h4>Land Rental</h4>
              </div>
              <div className="services-item-copy body-copy">
                <p>You wanna build an experiece in the Metaverse but you have no laand. Don't worry. We will find you a greap property to build on.</p>
              </div>
            </div>

            <div className="services-item subtitle">
            <img src={coin} alt="Absolut" />
              <div className="services-item-tittle">
                <h4>Web3
                </h4>
              </div>
              <div className="services-item-copy body-copy">
                <p>We offer our know how to help you bring your web3 ideas to life. NFT drops, Dapps, Token creation.</p>
              </div>
            </div>
          </div>

          <div className="services-content-column row ">
            <div className="services-item">
            <img src={idea} alt="Absolut" />
              <div className="services-item-tittle subtitle">
                <h4>Ideation and Creativity</h4>
              </div>
              <div className="services-item-copy body-copy">
                <p>We love joining teams to help them develop and understand the technologies to create minigful and succeful stories.</p>
              </div>
            </div>

            <div className="services-item">
            <img src={xr} alt="Absolut" />
              <div className="services-item-tittle subtitle">
                <h4>XR Experiences</h4>
              </div>
              <div className="services-item-copy body-copy">
                <p>Not a Metaverse idea? It's ok. We can help you with your VR or AR ideas.</p>
              </div>
            </div>

            <div className="services-item">
            <img src={rep} alt="Absolut" />
              <div className="services-item-tittle subtitle">
                <h4>Talent Representation</h4>
              </div>
              <div className="services-item-copy body-copy">
                <p>You need the best talent for your experience to be the best. We represent Metaverse enterntainers, digital architetcs and set desgine and product and fashion designers. </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      </>
    )
  }