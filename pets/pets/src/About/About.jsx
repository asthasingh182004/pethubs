import React from 'react';
import './About.css';
import { AppContext } from '../Context/Product';
import { useContext } from 'react';
//import about from '../assets/about.jpeg'

const About = () => {

  const myName = useContext(AppContext);
  return (
  
    <div className="about"> 
    {myName}
    <div className="about-container">
    <div className='about-box'>
    <h1 className='greetings'><i><b>Greetings from Petshub</b></i></h1>
    <img src='' alt=''/>
      <p>
      Every creature deserves a loving home, and that is our belief at Paws for Love. Our goal is to rescue, rehab, and rehome animals in need while eventually fostering enduring relationships between dogs and their adopted families. It is a straightforward but significant mission statement.
      </p>
      </div>

      <div className="about-box">
        <h1 className='h2'>Our Goals</h1>
      
        <p>Our goal at Pethub is to rescue, rehabilitate, and rehome pets to kind and considerate families who will treasure them for the rest of their lives. It's a straightforward yet powerful mission statement. We are dedicated to encouraging ethical pet ownership and lowering the quantity of stray animals in our neighborhood.</p>

      </div>

      <div className="about-box">
        <h1 className="h3">Values</h1>
        
        <p>At Pethub, our principles guide all we do. Our activities are guided by compassion, honesty, and openness as we work to give each animal in our care the best possible care. Regardless of the history or current situation, we think every creature deserves to be treated with respect and decency.</p>
      </div>

      <div className="about-box">
        <h1 className='h4'>Adoption Process</h1>
       
        <p>We have a procedure in place to make sure that adopters and dogs are matched as closely as possible. We are available to assist you at every stage, from initial questions to post-adoption care. Examine our available animals, fill out an adoption form, and get ready to bring a new pet into your house!</p>
      </div>

      <div className="about-box">
        <h1 className='h5'>Impact</h1>
        
        <p>
         Pethub has transformed the lives of adopters and animals alike by our unwavering work and the community's support. Every triumph, from touching adoption tales to accomplished rescue operations, increases our fervor and dedication to our cause
        </p>
      </div>

      <div className="about-box">
        <h1 className='h6'>Get Involved</h1>
       
        <p>
        Are you prepared to change things? Pawsome Pals offers an endless array of opportunities for involvement, ranging from fostering and volunteering to making donations and promoting pet adoption. Come along with us as we work to save lives and provide needy creatures better futures.
        </p>
      </div>
    </div>
   

      
      
      
    </div>
    
  )
}

export default About
