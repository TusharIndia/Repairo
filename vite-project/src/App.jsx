import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import "./index.css"
import Service from './components/service';
import Booking from './components/booking';
import Contact from './components/contact';
import About from './components/about';
function App() {
  

  return (
    <>
     <Router>
      <Routes>
       
        <Route path="/" element={<Home  />} />
        <Route path="/service" element={<Service  />} />
        <Route path="/booking" element={<Booking  />} />
        <Route path="/about" element={<About  />} />
        <Route path="/contact" element={<Contact  />} />
        <Route path='*' element={<h1>Not Found Page</h1>}/>
      </Routes>
    </Router>
    </>
    
  )
}

export default App
