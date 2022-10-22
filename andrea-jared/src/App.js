import React, {useState} from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';

function App() {
  const [categories] = useState([
    {
      name: 'Meal Time Roulette',
      description: 'A Game using HTML, CSS, JavaScript and server side APIs to randomize meal for the family',
    },
    { name: 'Through the looking Glass', description: 'A Blog using handlebars, javascript and mysql' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
          <Projects currentCategory={currentCategory}></Projects>
          <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;