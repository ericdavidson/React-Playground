import React from 'react';
import logo from './logo.svg';
import styles from './InfoRow.css';


class InfoRow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

  }

  // An InfoRow component takes in a ton of props from it's parent, App
  render() {
      return (

        // the onClick event handler references the handleClick(i) function in App.js
        // That function was also passed in as a prop
        <div onClick={this.props.onClick} class = "flexbox-container">
          {console.log('In Component')}
          {console.log(this.props.name)}
          <p>{this.props.name}</p>
          <p>{this.props.date}</p>
          <p>{this.props.diagnosis}</p>
          <p>{this.props.symptoms}</p>
          <p>{this.props.close_contact}</p>
          <p>{this.props.eligibility}</p>
          <p>{this.props.assigned}</p>
          <p>{this.props.contact_state}</p>
        </div>
      );
    }
  }

export default InfoRow;
