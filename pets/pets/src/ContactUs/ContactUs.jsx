import React from 'react'


const ContactUs = () => {
  return (
    <div className='box'>
      <div className='top'>
        <div className='para'>
          <p>We're here to help you find your perfect furry friend. Please feel free to reach out to us with any questions, inquiries, or feedback.</p>
        </div>
        <hr/>
        <div className='Mailing Address'>
          <h3>Mailing Address:</h3>
          <p>
           123 Pet Adoption Street<br/>
           Cityville, State, ZIP Code<br/>
           Country</p>
        </div>
        <div className="Phone">
          <h3>Phone:</h3>
          <p>
          (555) 123-4567</p>
        </div>
        <div className='Email'>
          <h3>Email:</h3>
          <a href="#" >info@petadoptionmumbai.in</a>
        </div>
        <h3 className='top-line'>Reach Out To Us At:</h3>
        
        <div className="handles">
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Email</li>
          </ul>
        </div>
        <div className="operating-hrs">
          <h3>Operating Hours</h3>
          <p>Monday-Friday: 9:00am - 5:00pm</p>
          <p>Saturday-Sunday:Closed</p>
        </div>
        <div className="response-time">
          <h3>Response Time:</h3>
          <p>We strive to respond to all inquiries within 24-48 hours during our regular operating hours</p>

          </div>
      </div>

    </div>
  )
}

export default ContactUs
