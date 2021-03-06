import React, { Component } from "react";
import Fade from "react-reveal";


class About extends Component {
  render() {
    if (!this.props.data) return null;
    const profilepic = "images/profilepic.png";
    const address = this.props.data.Address;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Hojin Nam Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>{this.props.data.description}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{this.props.data.firstname} {this.props.data.lastname}</span>
                    <br />

                    <span>
                      {address?.street}
                      <br />
                      {address?.city} {address?.state} {address?.country}
                    </span>

                    <br />
                    <span>{this.props.data.phone}</span>
                    <br />
                    <span>{this.props.data.email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={this.props.data.resume_download_link} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
