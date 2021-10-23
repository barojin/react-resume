import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  render() {
    if (!this.props) return null;

    const edu = this.props.educations.map(education => {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated_date}</em>
          </p>
          <p>{education.courses}</p>
        </div>
      );
    });

    const exp = this.props.experiences.map(experience => {
      return (
        <div key={experience.company}>
          <h3>{experience.company}</h3>
          <p className="info">
            {experience.job_title}
            <span>&bull;</span> <em className="date">{experience.years}</em>
          </p>
          {experience.descriptions.map((x) => <li> {x} </li>)}
          <p className="info">{"[" + experience.techstacks + "]"}</p>
          <br/>
        </div>
      );
    });

    const projects = this.props.projects.map(p => {
      return (
        <div key={p.title}>
          <h3>
          {p.github && <a href={p.github} className="btn"><i className="fa fa-github"></i></a>}
           {} {p.title}
          </h3>
          {p.descriptions.map((x) => <li> {x} </li>)}
          <p className="info">{"[" + p.techstacks + "]"}</p>
          <br/>
        </div>
      );
    });

    const sk = this.props.skills.map((skill) => {
      const backgroundColor = "#FFD700";
      const color = "#FFFFFF";
      const className = "bar-expand " + skill.name.toLowerCase();
      const width = skill.level;

      return (
        <li key={skill.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em style={{ color }}>{skill.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{edu}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Experience</span>

              </h1>
            </div>
            <div className="nine columns main-col">{exp}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Project</span>
              </h1>
            </div>
            <div className="nine columns main-col">{projects}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skill</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="bars">
                <ul className="skills">{sk}</ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }

}

export default Resume;
