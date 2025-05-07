import React from "react";
import "./sec.css";

const Second = () => {
  return (
    <div>
      <div className="sndpart">
        <div className="left">
          <h1>
            Bharadwaj Coaching Empowering <br /> Young Minds to Achieve <br />{" "}
            Greatness."
          </h1>
        </div>
        <div className="right">
          <p>
            At Bharadwaj Coaching, we specialize in personalized home tuition
            <br />
            for students preparing for competitive exams like IIT, NEET, CUET
            <br />
            and CLAT — available in both Hindi and English mediums, ensuring
            <br />
            focused attention, conceptual clarity, and academic success.
          </p>
          <div className="tutors">
            <h2 className="tutor">
              100+ <br />
              <span>Expert Tutors</span>
            </h2>
            <h2 className="tutor">
              15 <br />
              <span>Trusted by Partners</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
