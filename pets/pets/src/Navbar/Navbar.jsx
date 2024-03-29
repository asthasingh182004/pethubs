import {useState} from 'react'
import './Navbar.css'
import search from '../assets/search.png'
import {Link} from 'react-router-dom'
import assets_logo from '../assets/assets_logo.png'



const Navbar = () => {
    const [menu,setMenu]= useState();
   {/*const { loginWithRedirect } = useAuth0();*/}
  return (
    <div className='navbar'>
    <img src={assets_logo} alt='' className='logo'/>
    <ul className='nav-menu'>
        <li onClick={()=>{setMenu("home")}}><Link to='/home'>HOME</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("about")}}><Link to='/About'>ABOUT US</Link>{menu==="About"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("category")}}><Link to='/Category'>CATEGORY</Link>{menu==="category"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("contact us")}}><Link to='/ContactUs'>CONTACT US</Link>{menu==="contact us"?<hr/>:<></>}</li>
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
    <div className='register-button'>
      <Link to='/register'><button>Register</button></Link>
    </div>

    
      
    </div>
  )
}

export default Navbar
