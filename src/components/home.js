import React from 'react';
import Rita from '../img/hero.jpg';

export default function Home() {
  return (
    <div className="homeDiv">
      <img src={Rita} alt="rita" className="homeImage" />
      <div>
        <h1 className="homeName">RITA ANENE</h1>
        <h3 className='homeOccupation'>I Am A Software Developer</h3>
        <a href='/about' className="aboutButton">About Me</a>
      </div>
    </div>
  )
}
