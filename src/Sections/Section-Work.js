import './Sections.css'
import Absolut from './Assets/Absolut.gif'



export default function Work() {
    return (
      <>
      <div className="work container section row">
        
        <div className='work-content'>
            <img src={Absolut} alt="Absolut" />
        </div>  
        <div className='work-text column'>  
          <div className='work-title title'>
             <h2 >COACHELLA MEETS THE METAVERSE</h2>
          </div>
        
     
        <div className='work-caption body-copy'>
            <p>To celebrate 10 years as the official vodka of Coachella, Young Hero helped Absolut launch a first-of-its-kind Web3 experience 
              to mix festival-goers in the desert with fans in the metaverse. 
              Digitally, physically, literally. With over 10 interactive elements, 
              coveted wearables, and a chance to teleport from Decentraland to Coachella IRL.</p>
        </div>
        </div>

      </div>
      </>
    )
  }
  


