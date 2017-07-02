import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <div className="App">
    <Navbar />
    <Banner title="Pavel Georgiev" />
    <About />
    <Skills />
    <Projects />
    <Footer />
  </div>
  );


export default App;
