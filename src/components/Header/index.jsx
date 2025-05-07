import React, { useState, useEffect } from "react";

import "./header.css";
import Second from "./secondPart";

const Header = () => {
  return (
    <>
      <div className="header-container " data-aos="fade-up">
        <video autoPlay muted loop playsInline className="video-bg">
          <source src="/images/Background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="content">
          <h1>
            Achieve More
            <br /> Dream Bigger with Bharadwaj <br /> Coaching
          </h1>
          <p>
            Expert Home Tuition for Competitive Exams in Hindi and English
            Medium.
          </p>

          <p className="rating">
            ★★★★★ <br />
            Rated 5 Stars by Students Enroll Now{" "}
          </p>

          <a className="btn1" href="tel:+917781049149">
            Call Now
          </a>
        </div>
      </div>
      <Second />
    </>
  );
};

export default Header;
