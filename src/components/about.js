import React from 'react';
import Rita from '../img/about.jpg';
export default function About() {
  return (
    <div className='container'>
      <div className='titleDiv'>
        <h1 className='title'>ABOUT</h1>
        <p>I am an innovative and deadline-driven Software and Web Developer with years of experience
          designing and developing user-centered web and mobile applications and websites from initial
          concept to final, polished and deliverable.
        </p>
      </div>
      <div className='aboutContent'>
        <img src={Rita} alt='rita' />
        <div>
          <h3 className='soft' >Software & Web Developer</h3>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li>
                  <strong>Birthday:</strong>
                  20th March
                </li>
                <li>
                  <strong>Phone:</strong>
                  +234 802 279 5736</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li>
                  <strong>City:</strong>
                  Lagos, Nigeria
                </li>
                <li>
                  <strong>Email:</strong>
                  rhitanene@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h1 className='title'>WORK SKILLS</h1>
      <div className="row skills">
        <div>
          <div className="progress">
            <span className="skill">HTML </span>
          </div>
          <div className="progress">
            <span className="skill">CSS</span>
          </div>
          <div className="progress">
            <span className="skill">JavaScript</span>
          </div>
          <div className="progress">
            <span className="skill">Postgres </span>
          </div>
          <div className="progress">
            <span className="skill">C#</span>
          </div>
        </div>
        <div>
          <div className="progress">
            <span className="skill">React</span>
          </div>
          <div className="progress">
            <span className="skill">NestJs</span>
          </div>
          <div className="progress">
            <span className="skill">Asp.Net Core </span>
          </div>
          <div className="progress">
            <span className="skill">Mssql </span>
          </div>
        </div>
      </div>

      <h1 className='title'>LANGUAGES</h1>
      <div className="row language">
        <div>
          <div className="progress">
            <span className="skill">ENGLISH </span>
          </div>
          <div className="progress">
            <span className="skill">IGBO </span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}
