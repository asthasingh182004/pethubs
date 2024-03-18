import React from 'react';
import Navbar from './Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-dom';
import {Home} from './Home/Home.jsx';
import {xyz} from './xyz/xyz.jsx';

import {Category} from './Category/Category.jsx';
import {ContactUs} from './ContactUs/ContactUs.jsx'


const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/xyz" element={<xyz/>} />
        <Route path="/Category" element={<Category />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
