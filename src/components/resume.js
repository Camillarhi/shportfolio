import React from 'react'

export default function Resume() {
  return (
    <div className='container'>
      <div className='titleDiv'>
        <h1 className='title'>RESUME</h1>
        <p>I am a result driven Software developer with demonstrated experience in improving software performance,
          testing and updating existing software, and developing new software functionalities.
          Proficient in various platforms, languages and embedded systems.
        </p>
      </div>
      <div className="row">
        <div>
          <h3 className="resumeTitle">Sumary</h3>
          <div className='line'></div>
          <div className="resumeItem">
            <h4>Anene Rita</h4>
            <p><em>Innovative and deadline-driven Software and Web Developer with years of experience designing and developing user-centered web and mobile applications and websites from initial concept to final, polished deliverable.</em></p>
            <p>
            </p><ul>
              <li>Surulere, Lagos.</li>
              <li>+234 802 279 5736</li>
              <li>rhitanene@gmail.com</li>
            </ul>
            <p />
          </div>
          <h3 className="resumeTitle">Education</h3>
          <div className="resumeItem">
            <h4>Bachelor of Science &amp; Anatomy</h4>
            <h5>2016 - 2021</h5>
            <p><em>Chukwuemeka Odumegwu Ojukwu University, Uli, Anambra</em></p>
            {/* <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p> */}
          </div>
          <div className="resumeItem">
            <h4>Secondary School Certificate Examination</h4>
            <h5>2009 - 2015</h5>
            <p><em>Marjos International college, Lagos State.</em></p>
            {/* <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p> */}
          </div>
        </div>
        <div className="col-lg-6">
          <h3 className="resumeTitle">Professional Experience</h3>
          <div className="resumeItem">
            <h4>Full Stack Developer</h4>
            <h5>August 2021 - Present</h5>
            <p><em>Netop Business Consult, Lagos, Nigeria </em></p>
            <p>
            </p><ul>
              <li>Tasked to develop and
                maintain effective working
                projects with teammates
                using Asp.net core, React,
                Github, Netlify and Heroku.
              </li>
              <li>Conducted research,
                gathered information from
                multiple sources and
                presented results.
              </li>
              <li>Built Restful APIs that
                served data to the React
                frontend based on
                dynamically chosen user
                input using Asp.net Core.
              </li>
              <li>Managed and deployed web
                applications to Microsoft IIS.</li>
              <li>Managed, recovered and
                stacked data from database
                and also created solutions to
                store and get information in
                the database using MySQL
                and Postgres.
              </li>
              <li>Reviewed and tested code
                on applications before
                deployment.
              </li>
              <li>Reviewed and tested code
                on applications before
                deployment.
              </li>
              <li>Built reusable components
                and front end libraries for
                future use using react.
              </li>
              <li>Translated designs and
                wireframes into high quality
                code with react.js</li>
              <li>Optimized react
                components for maximum
                performance across a vast
                array of web-capable
                devices and browsers.</li>

            </ul>
            <p />
          </div>
        </div>
      </div>
    </div>
  )
}
