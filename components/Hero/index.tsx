/* eslint-disable @next/next/no-img-element */
import React from "react";

const Hero = () => {
  return (
    <div className="hero_wrapper" id="home">
      <img src="/img/hero-shape.png" className="img-fluid hero_shape" alt="" />
      <div className="left_clear">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero_content" data-aos="fade-right">
              <h1>Lorem ipsum dolor sit amet, consectetur</h1>
              <p>
                A project that stems from a profitable and ambitious 3PL
                business that is looking to help business owners and their
                customers enjoy life.
              </p>
              <a href="#" className="button">
                Get Started
                <img src="/img/hero-icon.svg" className="img-fluid" alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-6 hero_img_col">
            <div className="hero_img">
              <img src="/img/hero-img.png" className="img-fluid img" alt="Hero Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
