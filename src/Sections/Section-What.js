import './Sections.css'
import Experience from './Assets/Experience.gif'


export default function what() {
  

    return (
      <>
      <div className="what container section">
        <div className='column'>
          <div className="what-title title">
            <h3>FUTURE OF DIGITAL EXPERIENCES</h3>
          </div>
          <div className='what-copy body-copy'> 
            <p>Protagonist offers advanced, stylised, turnkey solutions that connect people within virtual space in a revolutionary way. 
              We collaborate with brands, businesses and beyond to enable show-stopping and future-proof metaverses.</p>
          </div>
        </div>
          < div className='column'>
          <div className='what-image image-border'>
              <img src={Experience} alt="Absolut" />
          </div>
          </div>
      </div>

      </>
    )
  }
