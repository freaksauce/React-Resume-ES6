import React from 'react';

export default class WorkItem extends React.Component {

  getWorkDates() {
    var startdate = moment(this.props.workItemData.startDate).format('MMM, YYYY');
    var enddate;
    if (this.props.workItemData.endDate !== '') {
      enddate = moment(this.props.workItemData.endDate).format('MMM, YYYY');
    } else {
      enddate = 'Present';
    }

    return <span className='startdate'>{startdate} - {enddate}</span>
  }

  render() {
    let getHighlights = this.props.workItemData.highlights.map(function(item) {
      return (<li>{item}</li>)
    });

    return (
        <div className="workItem">
          <h3>{this.props.workItemData.position}, <span>{this.props.workItemData.company}</span></h3>
          <p className="workDates">{this.getWorkDates()}</p>
          <p>{this.props.workItemData.summary}</p>
          <ul>{getHighlights}</ul>
        </div>
    )
  }

};
