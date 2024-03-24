import Navbar from './Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './About/About';
import Home from './Home/Home';
import Category from './Category/Category';
import ContactUs from './ContactUs/ContactUs';
import Login from './Login/Login';
import Register from './Register/Register';


const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Category" element={<Category />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
