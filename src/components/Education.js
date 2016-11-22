import React from 'react';

export default class Education extends React.Component {

  render() {

    var getEducation = 	this.props.educationData.map(function(item) {
  		var startdate = moment(item.startDate).format('MMM, YYYY');
  		var enddate = moment(item.endDate).format('MMM, YYYY');
  		return (
          <div>
            <h3>{item.studyType} {item.area}</h3>
  				  <h4>{item.institution}</h4>
  				  <p>Studied: {startdate} - {enddate}</p>
  				</div>
        )
  	});
  	return (
  	  <section className="education">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-mortar-board"></i> Education</h2>
        {getEducation}
      </section>
  	)

  }

};
