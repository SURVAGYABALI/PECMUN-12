import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Committees from './components/Committees';
import Schedule from './components/Schedule';
import Registration from './components/Registration';
import Secretariat from './components/Secretariat.tsx';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Committees />
      <Schedule />
      <Registration />
      <Secretariat />
    </div>
  );
}

export default App;