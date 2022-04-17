/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 pt_30">
              <div className="footer_content">
                <a href="#">
                  <img src="/img/logo.png" className="img-fluid" alt="" />
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit.
                </p>
                <div className="footer_social">
                  <a href="#">
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-4 col-md-4 pt_30">
                  <div className="footer_list_wrapper">
                    <p>Sitemap</p>
                    <ul className="footer_list">
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Team</a>
                      </li>
                      <li>
                        <a href="#">Product</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-5 col-md-4 pt_30">
                  <div className="footer_list_wrapper">
                    <p>About</p>
                    <ul className="footer_list">
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Terms & Conditions</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 pt_30">
                  <div className="footer_list_wrapper">
                    <p>Help</p>
                    <ul className="footer_list">
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
