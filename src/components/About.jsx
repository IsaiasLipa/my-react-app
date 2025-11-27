import './About.css';
import aboutImage from '../assets/aboutImage.png';
import { useEffect, useRef } from 'react';
export default function About({texts}) {

  console.log(texts);
  return (
    <section id="about" className="about">

      {/* Intro paragraph */}
      <div>
        <h2> {texts.who.title} </h2>
        <p className="about-intro">
          {texts.who.text}
        </p>
      </div>

      {/* Why pick us + image */}
      <div className="about-content">
        <div className="about-text">
          <h2>{texts.why.title}</h2>
          <ul>
            {texts.why.points.map((point, index) => <li key={index}>{point}</li>)}
          </ul>
        </div>

        <img
          src={aboutImage}
          alt="Compassionate medical transportation"
          className="about-image"
        />
      </div>


    </section>
  );
}
