import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Speakers from './components/Speakers';
import Partners from './components/Partners';
import Schedule from './components/Schedule';
import Logistics from './components/Logistics';
import Archive from './components/Archive';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Hero />
        <About />
        <Speakers />
        <Schedule />
        <Partners />
        <Logistics />
        <Archive />
      </main>
      <Footer />
    </div>
  );
}

export default App;
