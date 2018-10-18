import React, { Component } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Features from "./components/Features";
import FlexBreak from "./components/FlexBreak";
import Blog from "./components/Blog";
import BreakBox from "./components/BreakBox";
import Testimonial from "./components/Testimonial";
import DevTabs from "./components/DevTabs";
import Cta from "./components/Cta";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <div className="divider" />

          <div className="container">
            <div className="features">
              <Features title="Feature 1" ReadMore="Read More" />
              <Features title="Feature 2" ReadMore="Read More" />
              <Features title="Feature 3" ReadMore="Read More" />
              <Features title="Feature 4" ReadMore="Read More" />
            </div>
          </div>
          <div className="container">
            <FlexBreak />
            <div className="blog-section">
              <Blog />
              <Blog />
              <Blog />
            </div>
          </div>
        </main>
        <main>
          <div className="container">
            <BreakBox />
            <div className="dev-section">
              <div className="testimonials">
                <Testimonial />
                <Testimonial />
                <Testimonial />
                <Testimonial />
              </div>
              <DevTabs />
            </div>
            <Cta ctaText="Get in touch with us Now!" buttonText="Contact Us" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
