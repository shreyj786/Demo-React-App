import React from 'react'
// src/App.css
import "../App.css";
import personImage from '../assets/person.jpg';
import Navbar from '../components/Navbar';


const Home = () => {
  return (
    <>
      <Navbar />
      <div className='hero-bg 
      vh-100 
      d-flex 
      justify-content-center 
      flex-column 
      align-items-center'>
        <img src={personImage} className='image-style mb-2' alt="Person Image" />
        <p className='text-white'> Hi, I am Shrey Jain</p>
        <h3 className='hero-title'>A frontend developer specialised in React</h3>
      </div>
    </>

  )
}

export default Home