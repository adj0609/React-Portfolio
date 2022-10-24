import React from 'react';
import coverImage from '../../assets/cover/portfolio.jpg';

//function About() {
//   return (
function About () {
    return (
<section className="my-5">
  <h1 id="About">About Me</h1>
  <img src={coverImage} className="my-2" style={{ width: "50%", height: '50%' }} alt="cover" />
  <div className="my-2">
    <p>
      I am a Junior Developer with experience in MERN(MongoDB, ExpressJS, REactJs, and nodeJs) tech stacks. Currently I am attending a Full Stack development Bootcamp through the University of Central Florida
      With a graduation date of 17 November 2022. I am familiar with OOP, APis, 
    </p>
  </div>
</section>
    );
}

export default About;