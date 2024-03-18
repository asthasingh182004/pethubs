import Navbar from './Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Correct import statement

import Home from './Home/Home';
import About from './About/About';
import Category from './Category/Category';
import Contact from './Contact/Contact';

const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
        <Navbar/> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/ContactUs" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
