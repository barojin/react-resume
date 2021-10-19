import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import ResumeComponent from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";


import { listResumes, listExperiences } from './graphql/queries';
import { Logger } from 'aws-amplify';
import { API, Storage } from 'aws-amplify';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
      resumeArr: []
    };
    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  async getResumes() {
    const apiData = await API.graphql({ query: listResumes });
    const resumesFromAPI = apiData.data.listResumes.items;
    await Promise.all(resumesFromAPI.map(async resume =>{
      if (resume.profileimage){
        const image = await Storage.get(resume.profileimage);
        resume.profileimage = image
      }
      return resume
    }))
    this.setState({ resumeArr: resumesFromAPI})
    const logger = new Logger("this.state.resumeArr")
    logger.error(this.state.resumeArr[0])
    
  }

  componentDidMount() {
    this.getResumeData();
    this.getResumes();

  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeArr[0]} />
        <About data={this.state.resumeArr[0]} />
        <ResumeComponent data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
