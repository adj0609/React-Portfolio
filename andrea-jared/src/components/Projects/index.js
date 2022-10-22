import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoList from '../PhotoList';

function Projects({ currentCategory }) {
  const {name, description } = currentCategory;
  return (
    <section>
   <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <PhotoList  />
    </section>
  );
}
  


export default Projects;


//function Projects() {
//    return (
//        <section>
//         <h1>Andrea Jared</h1>
//         <p>Junior Full Stack Developer with experience using MERN, MongoDB, ExpressJS, ReactJs and nodeJS tech stack. Currently attending a Full Stack Development Bootcamp through the university of Central Florida with a graduation date of 17 November 2022. Familiar with OOP, API's, PWA and version control with Git and GitHub.
//             A Self starter and team player with extensive experience in management and leadership from the 
//             Service industry as a Director of Outlets managing multiple Restaurants.
//         </p>
//        </section>
//    );
//}

