import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    contactSelected,
    setContactSelected,
    ProjectSelected,
    setProjectSelected,
    setResumeSelected,
    ResumeSelected,
  } = props;


  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
          <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
             About Me
           </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact Me</span>
          </li>
          <li className={`mx-2 ${ProjectSelected && 'navActive'}`}>
            <span onClick={() => setProjectSelected(true)}>Projects</span>
          </li>
          <li className={`mx-2 ${ResumeSelected && 'navActive'}`}>
   <span onClick={() => setResumeSelected(true)}>Resume</span>
 </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;