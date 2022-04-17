/* eslint-disable @next/next/no-img-element */
import React from "react";

const About = () => {
  return (
    <div className="about_wrapper" id="about">
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about_content" data-aos="fade-right">
              <img
                src="/img/about-shape1.png"
                className="img-fluid about_shape1"
                alt=""
              />
              <h5>About Us</h5>
              <h2 className="title">
                We focus on all members of our ecosystem & not just end users
              </h2>
              <p>
                Our project will bring together crypto with physical trade and
                commerce, starting with our 3PL and here shortly our
                marketplace. We plan to bring utility not only to our token, but
                all crypto by allowing any user to purchase with our own Enjoy
                token, fiat, BitCoin, Etherium, & more!
              </p>
              <a href="#" className="button">
                Get Started
                <img src="/img/about-icon.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about_img" data-aos="fade-left">
              <img src="/img/about-img.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
