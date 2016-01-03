import React from 'react';

export default class About extends React.Component {

  render() {
    return (
      <section className="about">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-user"></i> About</h2>
        <div>{this.props.aboutData}</div>
      </section>
    );
  }

};
