import React from 'react';
import logo from './logo.svg';
import './ColumnName.css';


class ColumnName extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.name
    }

    this.handleClick = this.handleClick.bind(this)
  }

  // For now clicking the column name will spawn an alert (eventually it would sort the list)
  handleClick() {
    alert(this.state.name)
  }

  render() {
      return (
        <p onClick={this.handleClick}>{this.state.name}</p>
      );
    }
  }

export default ColumnName;
