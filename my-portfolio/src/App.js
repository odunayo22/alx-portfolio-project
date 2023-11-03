import React from 'react';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Foot from './components/Foot/Foot';
//import './App.css';

const App = ()=> {
  return (
    <div>
     <Header/>
     <Nav />
     <About />
     <Experience />
     <Services />
     <Portfolio />
     <Testimonial />
     <Contact />
     <Footer />
     <Foot />
     

    </div>
  );
}

export default App;
