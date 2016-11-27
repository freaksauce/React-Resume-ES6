import React from 'react';

const Skills = props => {
    const getSkills = props.skillsData[0].keywords.map(function(item, index) {
      return (<li key={index}><span className="label label-success">{item}</span></li>)
    });

  	return (
  	  <section className="skills">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-code"></i> Skills</h2>
        <ul className="skills-list list-inline">{getSkills}</ul>
      </section>
  	)
};

export default Skills;
