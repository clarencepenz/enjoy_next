/* eslint-disable @next/next/no-img-element */
import React from "react";

const Subscribe = () => {
  return (
    <div id="sub">
      <br />
      <br />
      <div className="subscribe_wrapper">
        <img src="/img/sub-shape.png" className="img-fluid sub_shape" alt="" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="subscribe_content_wrapper"
                data-aos="fade-down"
                style={{ backgroundImage: `url(img/sub-bg.png)` }}
              >
                <h2>Subscribe to our newsletter</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                  volutpat.
                </p>
                <div className="subscribe_input_box">
                  <input type="email" placeholder="Enter your email address" />
                  <div className="input_btn">
                    <button className="button" type="submit">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
