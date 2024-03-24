import React from 'react'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <section className="contact">
      <div className='content'>
        <h3>Contact Us</h3>
        <p>We're here to help you find your perfect furry friend. Please feel free to reach out to us with any questions, inquiries, or feedback
          .</p>

      </div>
      <br/>
      <div className="contact-container">
        <div className="contactInfo">
          <div className="contact-box">
            <div className="icon">
              <div className="text">
                <h3>Address</h3>
                <p>123 Pet Adoption Street<br/>
                   Cityville, State, ZIP Code<br/>
                  Country
                </p>
              </div>
              <br/>
            </div>
            <div className="contact-box">
            <div className="icon">
              <div className="text">
                <h3>Phone</h3>
                <p>982156743</p>
                </div>
              </div>
              <br/>
              <div className="contact-box">
            <div className="icon">
              <div className="text">
                <h3>Email</h3>
                <p>petshubinfo@mumbai.in</p>
                
              </div>
              <br/>
              <br/>
              </div>
          </div>
          <div className="contactform">
            <form>
              <h2>Send Message</h2>
              <br/>
              <div className="inputBox">
              <span>Full Name : </span>
                  <input type='text' name="" required="required"/>
                </div>
                <br/>
              <div className="inputBox">
              <span>Email  :</span>
                <input type='text' name="" required="required"/>
                 </div>
                 <br/>
                  <div className="inputBox">
                  <span>Type Your Message...</span>
                <textarea  required="required"/>
                  </div>
                  <br/>
                  <div className="inputBox">
                <button>Submit</button>
                  
                </div>
            </form>
          </div>
          </div>
        </div>
      </div>
      </div>

      
    </section>
  )
}

export default ContactUs

