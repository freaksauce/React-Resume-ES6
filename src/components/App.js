import React from 'react';
import axios from 'axios';
import Profile from './Profile';
import About from './About';
import Work from './Work';
import WorkItem from './WorkItem';
import Skills from './Skills';
import Education from './Education';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {jsonObj: null};

    //ajax call to get resume file
    axios.get(this.props.source)
      .then(result => {
        this.setState({jsonObj: result});
      });
  }

  render() {
    if (this.state.jsonObj) {
      const profileData = this.state.jsonObj.basics;
      const aboutData = profileData.summary;
      const workData = this.state.jsonObj.work;
      const skillsData = this.state.jsonObj.skills;
      const educationData = this.state.jsonObj.education;
      // console.log(profileData)
      return (
              <div className="container">
                <div className="row">
                  <aside className="col-md-4">
                    <div className="inner">
                      <Profile profileData={profileData} />
                    </div>
                  </aside>
                  <main className="col-md-8">
                    <div className="inner">
                      <About aboutData={aboutData} />
                      <Work workData={workData} />
                      <Skills skillsData={skillsData} />
                      <Education educationData={educationData} />
                    </div>
                  </main>
                </div>
              </div>
            )
    } else {
      return <p>Loading...</p>
    }

  }

};

App.defaultProps = { jsonObj: null };
