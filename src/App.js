import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Projects from './pages/Projects';


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/project' element={<Projects/>} />
      </Routes>
    
  )
}
export default App
