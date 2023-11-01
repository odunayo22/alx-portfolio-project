import React from 'react';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Services from './components/Services/Services';
//import './App.css';

const App = ()=> {
  return (
    <div>
     <Header/>
     <Nav />
     <About />
     <Experience />
     <Services />
    </div>
  );
}

export default App;
