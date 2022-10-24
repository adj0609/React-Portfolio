import React, {useState} from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    {
      name: 'Meal Time Roulette',
      description: 'A Game using HTML, CSS, JavaScript and server side APIs to randomize meal for the family',
    },
    { name: 'Through the looking Glass', description: 'A Blog using handlebars, javascript and mysql' },
    {
      name: 'Resume',
      description: 'Andrea Jared'
    }
  ]);

  

  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Nav
        categories={categories}

        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
          <Projects /> 
          <About />About Me
          </>
        ) : (
          <ContactForm/>
        )}
      </main>
    </div>
  );
}

export default App;