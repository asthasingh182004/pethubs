import React from 'react'
import './Navbar.css'
import search from '../assets/search.png'
import {Link} from 'react-dom'


const Navbar = () => {
    const [menu,setMenu]= useState();
  return (
    <div className='navbar'>
    <img src="" alt='' className='logo'/>
    <ul className='nav-menu'>
        <li onClick={()=>{setMenu("home")}}><Link to='/home'>HOME</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("xyz")}}><Link to='/xyz'>ABOUT US</Link>{menu==="xyz"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("category")}}><Link to='/category'>CATEGORY</Link>{menu==="category"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("contact us")}}><Link to='/contact us'>CONTACT US</Link>{menu==="contact us"?<hr/>:<></>}</li>
    </ul>

    <div className="search-box">
        <input type='text' placeholder='Search here'/>
       <img src={search} alt=""/> 
           </div>
    <div className="toggle-icon">

    </div>
    <div className="nav-login">
     <Link to='/login'><button>Login</button></Link> 
      <img src='' alt=''/>
    </div>

    
      
    </div>
  )
}

export default Navbar
