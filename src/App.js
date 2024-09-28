import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Service from './Service';
import Blogs from './Blogs';
import Testimonial from './Testimonial.js';
import Contact from './Contact';
export default function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/testinomial' element={<Testimonial />} />
        <Route path='*' element={<p>404 - Page Not Found</p>} />

        </Routes>
        </BrowserRouter>
    </div>
  )
}
