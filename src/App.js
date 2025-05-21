import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <Body/>
      <About/>
      <Skills/>
      <Education/>
      <Projects/>
      <Contact />
    
    </div>
  );
}

export default App;