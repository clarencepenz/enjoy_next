/* eslint-disable @next/next/no-img-element */
import React from "react";

interface IMenuProps {
  onMobileSidebarOpen: () => void;
}

const Header: React.FC<IMenuProps> = ({ onMobileSidebarOpen }) => {
  return (
    <header className="d-flex align-items-center sticky-top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3 col-8 text-left">
            <a href="#" className="logo">
              <img src="/img/logo.png" className="img-fluid" alt="" />
            </a>
          </div>
          <div className="col-md-9 col-4 position-relative">
            <ul id="menu" className="scroll_item">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#team" className="nav-link">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a href="#product" className="nav-link">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <img
                    src="/img/header-icon1.png"
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <img
                    src="/img/header-icon2.png"
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </li>
              <li className="nav-item">
                <a href="#sub" className="nav-link">
                  Interest Form
                </a>
              </li>
            </ul>
            <div className="d-lg-none d-block">
              <ul className="mobile_menu_icon">
                <li>
                  <a href="#">
                    <img
                      src="/img/header-icon1.png"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="/img/header-icon2.png"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>

            <div className="hamburger-menu" onClick={onMobileSidebarOpen}>
              <span className="line-top"></span>
              <span className="line-center"></span>
              <span className="line-bottom"></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
