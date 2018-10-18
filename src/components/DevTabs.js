import React from "react";

const DevTabs = () => (
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque quas
          perspiciatis neque dolor sit amet consectetur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          officiis iste quidem dolor sit amet consectetur!
        </p>
        <a href="#something" className="button">
          Read more
        </a>
      </div>

      <input type="radio" id="dev-2" name="tab-group" />
      <label htmlFor="dev-2">Production</label>
      <div className="dev-content">
        <h4>THE PRODUCTION</h4>
        <p>
          2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque quas
          perspiciatis neque dolor sit amet consectetur.
        </p>
        <p>
          2Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          officiis iste quidem dolor sit amet consectetur!
        </p>
        <a href="#something" className="button">
          Read more
        </a>
      </div>
    </div>
  </div>
);

export default DevTabs;
