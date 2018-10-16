import React, { Component } from "react";
import HeaderImage from "../../src/assets/Header-img.png";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="hero container">
          <div className="hero-image">
            <img src={HeaderImage} alt="header-image" />
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
              <a href="#" className="button">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="cta container">
          <div className="cta-copy">
            <p>
              Create a <span className="changetext">powerful</span> solution
              now!
            </p>
          </div>

          <div className="cta-button">
            <a href="#" className="button button-white">
              Get Started
            </a>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
