/* eslint-disable @next/next/no-img-element */
import React from "react";

const Team = () => {
  return (
    <div className="team_wrapper" id="team">
      <br />
      <br />
      <img src="/img/team-shape.png" className="img-fluid img team_shape" alt="Team Image" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="team_heading">
              <h2 className="title">The Team</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
                nibh pharetra gravida quam vitae facilisis mauris massa sociis.
                Dictumst sed sed euismod id
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 pt_30">
            <div className="team_box" data-aos="fade-right">
              <div className="team_img">
                <img src="/img/team-img1.png" className="img-fluid img" alt="Team Image" />
              </div>
              <div className="team_content">
                <h3>Cory</h3>
                <p>Design lead</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 pt_30">
            <div className="team_box" data-aos="fade-down">
              <div className="team_img">
                <img src="/img/team-img2.png" className="img-fluid img" alt="Team Image" />
              </div>
              <div className="team_content">
                <h3>Joshua</h3>
                <p>Dev Lead</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 pt_30">
            <div className="team_box" data-aos="fade-left">
              <div className="team_img">
                <img src="/img/team-img3.png" className="img-fluid img" alt="Team Image" />
              </div>
              <div className="team_content">
                <h3>Joshua</h3>
                <p>Dev Lead</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
