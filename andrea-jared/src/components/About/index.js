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
      will fill in when functionality is fixed
    </p>
  </div>
</section>
    );
}

export default About;