import React from "react";

const Cta = ({ ctaText, buttonText }) => (
  <div className="container">
    <div className="cta container">
      <div className="cta-copy">
        <p>{ctaText}</p>
      </div>

      <div className="cta-button">
        <a href="#something" className="button button-white">
          {buttonText}
        </a>
      </div>
    </div>
  </div>
);

export default Cta;
