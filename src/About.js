import React from 'react';
import headshot from './stone-rogene-2016.jpg'
import './css/about.css'

let About = props => {
  return(
    <div className="about-page">
      <h1 className="heading">About Ro (Rogene)</h1>
        <div className="about-ro">
          <img src={headshot} alt="rogene-headshot" />
            <div className="about-ro-content">
              <p>I am a lifelong resident of the Grand Island area with strong personal and professional  relationships within the community.
              My background includes over 35 years of experience in bookkeeping, medical office management, and banking.</p>
              <p>I am the mother of 3 grown children and an active member of our church. I look forward to working with you. Feel free to give me a call, and we can discuss how I may assist you with your needs. My name is Rogene and you can reach me at (308) 380-6503.</p>
            </div>
        </div>
    </div>
  )
}

export default About
