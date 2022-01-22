import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AnimatedCursor from "react-animated-cursor"
function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <AnimatedCursor
      innerSize={16}
      outerSize={16}
      color='74,222,128'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
    />
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
