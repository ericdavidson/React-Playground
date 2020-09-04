import React from 'react';
import logo from './logo.svg';
import './HeaderRow.css';
import ColumnName from './ColumnName.js'


class HeaderRow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  // Mostly hardcoded names for the columns, passed into an actual ColumnName component
  render() {
      return (
        <div class = "header-flexbox-container column-names">
          <ColumnName name='Staff Name' />
          <ColumnName name='Created Date' />
          <ColumnName name='Diagnosis' />
          <ColumnName name='Symptoms' />
          <ColumnName name='Close Contact' />
          <ColumnName name='Eligibility' />
          <ColumnName name='Assigned' />
          <ColumnName name='Contact Status' />
        </div>
      );
    }
  }

export default HeaderRow;
