
import Navbar from './Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import About from './About/About';
import Home from './Home/Home';
import Category from './Category/Category';
import ContactUs from './ContactUs/ContactUs';


const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Category" element={<Category />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
