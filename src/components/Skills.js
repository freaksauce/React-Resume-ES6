import React from 'react';

export default class Skills extends React.Component {

  render() {

    let getSkills = this.props.skillsData[0].keywords.map(function(item) {
      return (<li><span className="label label-success">{item}</span></li>)
    });

  	return (
  	  <section className="skills">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-code"></i> Skills</h2>
        <ul className="skills-list list-inline">{getSkills}</ul>
      </section>
  	)

  }

};
