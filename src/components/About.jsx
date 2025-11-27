import './About.css';
import aboutImage from '../assets/aboutImage.png';
import { useEffect, useRef } from 'react';
export default function About() {


  return (
    <section id="about" className="about">

      {/* Intro paragraph */}
      <div>
        <h2> Who are we</h2>
        <p className="about-intro">
          Our mission is to serve our community by providing dependable,
          respectful, and accessible transportation for individuals who rely
          on Medicaid for their healthcare. We believe everyone deserves the
          chance to get to their medical appointments safely and on time, and
          we’re proud to be a trusted partner in supporting the health and
          independence of our neighbors.
        </p>
      </div>

      {/* Why pick us + image */}
      <div className="about-content">
        <div className="about-text">
          <h2>Why pick us</h2>
          <ul>
            <li>Family owned transportation company that treats every patient like one of our own.</li>
            <li>Personalized care tailored to your needs.</li>
            <li>Punctual transportation to your medical appointments.</li>
            <li>Safe, clean, and comfortable vehicles.</li>
            <li>Proudly serving our local community.</li>
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
