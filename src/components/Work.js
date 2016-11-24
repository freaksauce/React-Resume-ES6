import React from 'react';
import WorkItem from './WorkItem';

export default class Work extends React.Component {

  getWorkExperience() {
    const workItems = [];
    this.props.workData.forEach((val) => {
      workItems.push(<WorkItem workItemData={val}/>);
    })
    return workItems;
  }

  render() {
    return (
      <section className="work">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-building"></i> Work experience</h2>
        {this.getWorkExperience()}
      </section>
    );
  }

};
