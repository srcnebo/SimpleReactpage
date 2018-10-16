import React, { Component } from "react";
import PlaceHolder from "../assets/img-placeholder.png";

class Main extends Component {
  render() {
    return (
      <main>
        <div className="divider" />
        <div className="container">
          <div className="features">
            <div className="feature-item">
              <i className="fas fa-mobile-alt" />
              <h4>Feature 1</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptas velit reprehenderit neque officia molestiae fuga
                quaerat ad mollitia! Inventore, mollitia.
              </p>
              <a href="#" className="button">
                Read more
              </a>
            </div>
            <div className="feature-item">
              <i className="fas fa-desktop" />
              <h4>Feature 1</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptas velit reprehenderit neque officia molestiae fuga
                quaerat ad mollitia! Inventore, mollitia.
              </p>
              <a href="#" className="button">
                Read more
              </a>
            </div>
            <div className="feature-item" id="fhover">
              <i className="fas fa-laptop" />
              <h4>Feature 1</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptas velit reprehenderit neque officia molestiae fuga
                quaerat ad mollitia! Inventore, mollitia.
              </p>
              <a href="#" className="button">
                Read more
              </a>
            </div>
            <div className="feature-item">
              <i className="fas fa-sync" />
              <h4>Feature 1</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptas velit reprehenderit neque officia molestiae fuga
                quaerat ad mollitia! Inventore, mollitia.
              </p>
              <a href="#" className="button">
                Read more
              </a>
            </div>
          </div>
          <div className="flexbreak">
            <div className="divider" />
            <p>RECENT WORK</p>
            <div className="divider" />
          </div>
          <div className="blog-section">
            <div className="blog">
              <img src={PlaceHolder} alt="blog image" />
              <div className="test-item">
                <h4>Blog title</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Necessitatibus qui similique sed!
                </p>
              </div>
            </div>
            <div className="blog">
              <img src={PlaceHolder} alt="blog image" />
              <div className="test-item">
                <h4>Blog title</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Necessitatibus qui similique sed!
                </p>
              </div>
            </div>
            <div className="blog">
              <img src={PlaceHolder} alt="blog image" />
              <div className="test-item">
                <h4>Blog title</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Necessitatibus qui similique sed!
                </p>
              </div>
            </div>
          </div>
          <div className="breakbox">
            <div className="flexbreak">
              <div className="divider" />
              <p>TESTIMONIALS</p>
              <div className="divider" />
            </div>
            <div className="flexbreak">
              <div className="divider" />
              <p>DEVELOPMENT</p>
              <div className="divider" />
            </div>
          </div>
          <div className="dev-section">
            <div className="testimonials">
              <div className="test-item">
                <h4>John smith</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  enim laboriosam nam obcaecati nostrum dolor sit amet
                  consectetur.
                </p>
              </div>
              <div className="test-item">
                <h4>John smith</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  enim laboriosam nam obcaecati nostrum dolor sit amet
                  consectetur.
                </p>
              </div>
              <div className="test-item">
                <h4>John smith</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  enim laboriosam nam obcaecati nostrum dolor sit amet
                  consectetur.
                </p>
              </div>
              <div className="test-item">
                <h4>John smith</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  enim laboriosam nam obcaecati nostrum dolor sit amet
                  consectetur.
                </p>
              </div>
            </div>
            <div className="dev-tabs">
              <div className="dev">
                <input
                  type="radio"
                  id="dev-1"
                  name="tab-group"
                  defaultChecked="checked"
                />
                <label htmlFor="dev-1">Design</label>
                <div className="dev-content">
                  <h4>THE DESIGN</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Itaque quas perspiciatis neque dolor sit amet consectetur.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione officiis iste quidem dolor sit amet consectetur!
                  </p>
                  <a href="#" className="button">
                    Read more
                  </a>
                </div>

                <input type="radio" id="dev-2" name="tab-group" />
                <label htmlFor="dev-2">Production</label>
                <div className="dev-content">
                  <h4>THE PRODUCTION</h4>
                  <p>
                    2Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Itaque quas perspiciatis neque dolor sit amet consectetur.
                  </p>
                  <p>
                    2Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione officiis iste quidem dolor sit amet consectetur!
                  </p>
                  <a href="#" className="button">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="cta container">
            <div className="cta-copy">
              <p>Get in touch with us Now!</p>
            </div>

            <div className="cta-button">
              <a href="#" className="button button-white">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
