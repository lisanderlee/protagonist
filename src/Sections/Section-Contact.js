import './Sections.css'

export default function Contact() {
    return (
      <>
      <div className="contact container section">
        <div className='column'>
          <div className="contact-title subtitle">
            <h3>LET'S DISCUSS YOUR PROJECT</h3>
          </div>
          <div className='contact-copy body-copy'> 
            <p>Let's get in touch. We love what we and we would love to help you.</p>
          </div>
        </div>
        <div className='column'>
          <div className='contact-form'>
              <input type="text" className="contact-input" name="fname" id="fname" placeholder="First name"></input>
              <input type="text" className="contact-input" name="fname" id="fname" placeholder="Email"></input>
              <input type="text" className="contact-message" name="fname" id="fname" placeholder="Message"></input>
              <button type="submit" className="contact-button">Submit</button>
          </div>
        </div>
      </div>
      </>
    )
  }