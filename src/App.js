import React, { Component } from "react";
import ReactGA from "react-ga";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Work from "./Components/Work";

import { getResume } from './graphql/queries';
import { API, Storage,  graphqlOperation } from 'aws-amplify';

import ContactUs from "./Components/contactForm";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resume: {},
      experiences: [],
      projects: [],
      educations: [],
      skills: []
    };
    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  async getResume(){
    const apiData = await API.graphql(graphqlOperation(getResume, { id: '155d55df-6783-4683-8af7-0a8cff29346c' }));
    if (apiData.data.getResume.profileimage){
      const image = await Storage.get(apiData.data.getResume.profileimage);
      apiData.data.getResume.profileimage = image;
    }
    this.setState({resume: apiData.data.getResume});
    this.setState({experiences: apiData.data.getResume.Experiences.items});
    this.setState({educations: apiData.data.getResume.Educations.items});
    this.setState({projects: apiData.data.getResume.Projects.items});
    this.setState({skills: apiData.data.getResume.Skills.items});
  }

  componentDidMount() {
    this.getResume();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resume} />
        <About  data={this.state.resume} />
        <Work experiences={this.state.experiences} educations={this.state.educations} projects={this.state.projects} skills={this.state.skills} />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default App;
