import './Sections.css'
import Absolut from './Assets/Absolut.gif'
export default function Proprietary() {
    return (
      <>
      <div className="proprietary container section">
        <div className='column'>
          <div className="proprietary-title title">
            <h3>PROPRIETARY TOOLS FOR BETTER PERFORMANCE</h3>
          </div>
          <div className='proprietary-copy body-copy'> 
            <p>We use our know how and experience in the industry to develop our own proprietary toodls to solve our clients needs. 
              Analitic , presentation and deploymet tools that moves the industry fowards.</p>
          </div>
        </div>
        <div className='column'>
          <div className='proprietary-image image-border'>
              <img src={Absolut} alt="Absolut" />
          </div>
        </div>
      </div>
      </>
    )
  }