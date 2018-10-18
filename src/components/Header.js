import React, { Component } from "react";
import HeaderImage from "../../src/assets/Header-img.png";
import Cta from "./Cta";

class Header extends Component {
  render() {
    const ctaActualText = (
      <span>
        Create a <span className="changetext">powerful</span> solution now!{" "}
      </span>
    );
    return (
      <header>
        <div className="hero container">
          <div className="hero-image">
            <img src={HeaderImage} alt="header-img" />
          </div>

          <div className="hero-copy">
            <h1>
              <span className="changetext">Powerfully simple</span> with a{" "}
              <br />
              <span className="changetext">squeaky clean</span> design
            </h1>
            <p>
              Find out how you can offer a quick and poweful solution to your
              customers
            </p>

            <div className="hero-buttons">
              <a href="#top" className="button">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <Cta ctaText={ctaActualText} buttonText="Get Started" />
      </header>
    );
  }
}
export default Header;

{
  /* <div className="cta container">
          <div className="cta-copy">
            <p>
              
            </p>
          </div>

          <div className="cta-button">
            <a href="#top" className="button button-white">
              Get Started
            </a>
          </div>
        </div> */
}
