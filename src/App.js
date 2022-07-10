import React from "react";
import Navbar from "./common/navbar/navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/home/home";
import About from "./components/about/about";
import Gallery from "./components/gallery/gallery";
import Destination from "./components/destination/destination";
import Blog from "./components/blog/blog";
import Testimonial from "./components/testimonial/testimonial";
import Contact from "./components/contact/contact";
import Footer from "./common/footer/footer";


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/destinations" element={<Destination />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
