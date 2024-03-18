<<<<<<< HEAD

import Navbar from './Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import About from './About/About';
import Home from './Home/Home';
import Category from './Category/Category';
import ContactUs from './ContactUs/ContactUs';
=======
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Correct import statement
>>>>>>> 8c0222ff1127ce50c89d1670063c49ef75cbf10e

import Home from './Home/Home';
import About from './About/About';
import Category from './Category/Category';
import Contact from './Contact/Contact';

const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
<<<<<<< HEAD
      <Navbar/> 
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Category" element={<Category />} />
        <Route path="/ContactUs" element={<ContactUs />} />
=======
        <Navbar/> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/ContactUs" element={<Contact />} />
>>>>>>> 8c0222ff1127ce50c89d1670063c49ef75cbf10e
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
