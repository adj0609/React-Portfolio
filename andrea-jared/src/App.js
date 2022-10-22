import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Projects></Projects>
      </main>
    </div>
  );
}

export default App;