import React from 'react';
import {Link} from 'react-router-dom';
import  './Category.css';
import dog from '../assets/dog.png.jpeg'
import cat from '../assets/cat.png.jpeg'
import turtle from '../assets/turtle.png.jpeg'
import rabbit from '../assets/rabbit.png.jpeg'
import fish from '../assets/fish.png.jpeg'

const Category = () => {
  return (
    <div className='box-container'>
      <h1 className='Categories'>Categories</h1>
    <div className="xyz">
      <div className="box">
        <img src={dog} alt=''/>
        <h3>Dogs</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam praesentium repudiandae minus impedit autem, quidem eaque! Quis qui deserunt voluptas assumenda fugit ipsa repellendus voluptate quaerat eos aperiam? Vero, ad.</p>
        <Link to='/dogs'><button>Explore More</button></Link> 
        </div>

        <div className="box">
        <img src={cat} alt=''/>
        <h3>Cats</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam praesentium repudiandae minus impedit autem, quidem eaque! Quis qui deserunt voluptas assumenda fugit ipsa repellendus voluptate quaerat eos aperiam? Vero, ad.</p>
        <Link to='/cats'><button>Explore More</button></Link> 
      </div>


      <div className="box">
        <img src={turtle} alt=''/>
        <h3>Turtle</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam praesentium repudiandae minus impedit autem, quidem eaque! Quis qui deserunt voluptas assumenda fugit ipsa repellendus voluptate quaerat eos aperiam? Vero, ad.</p>
        <Link to='/turtle'><button>Explore More</button></Link> 
        </div>


        <div className="box">
        <img src={rabbit} alt=''/>
        <h3>Rabbit</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam praesentium repudiandae minus impedit autem, quidem eaque! Quis qui deserunt voluptas assumenda fugit ipsa repellendus voluptate quaerat eos aperiam? Vero, ad.</p>
        <Link to='/rabbit'><button>Explore More</button></Link>
        </div>

       <div div className="box">
        <img src={fish} alt=''/>
        <h3>Fish</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam praesentium repudiandae minus impedit autem, quidem eaque! Quis qui deserunt voluptas assumenda fugit ipsa repellendus voluptate quaerat eos aperiam? Vero, ad.</p>
        <Link to='/fish'><button>Explore More</button></Link> 
        </div>



    </div>
      
    </div>
    
  )
}

export default Category
