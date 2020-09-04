import React from 'react';
import logo from './logo.svg';
import './App.css';
import InfoRow from './InfoRow.js'
import HeaderRow from './HeaderRow.js'
import header from './header.png'

const names = ["Davidson, Eric", "Shmoe, Joe", "Fresco, Al", "Mike, Tiny", "Blake, Sam", "Smith, Will", "Great, Scott"]
const contact_status = ["Not Contacted", "Left Voicemail", "Pending Review", "Completed"]

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      // Start with an empty list of rows (records)
      rows: []
    }

    // Populate the App state list with random data (10 people)
    for (var i = 0; i < 10; i++) {
      this.state.rows = this.state.rows.concat(this.get_info_row());
    }

    // Give handleClick access to state information
    this.handleClick = this.handleClick.bind(this);
  }

  // Simple function to create a randomish record
  get_info_row() {
    return {
      name: names[Math.floor(Math.random() * (names.length))],
      date: '8/4/2020',
      diagnosis: (Math.random() < .5 ? 'yes' : 'no'),
      symptoms: (Math.random() < .5 ? 'yes' : 'no'),
      close_contact: (Math.random() < .5 ? 'yes' : 'no'),
      eligibility: (Math.random() < .5 ? 'INELIGIBLE' : 'ELIGIBLE'),
      assigned: 'Morgan Lea',
      contact_state: contact_status[Math.floor(Math.random() * (contact_status.length))]
    }
  }

  // When a record is clicked, randomize it again (pretend this is updating and saving)
  handleClick(i) {
    this.setState({
      rows: this.state.rows.map((item, j) => {
        if (i === j){
          return this.get_info_row()
        } else {
          return item
        }
      }),
    });
  }

  // Step through the App state data and pass all that info in an InfoRow component
  render() {
      return (
        <div>
          <img align="left" class="header-image" src={header}></img>
          <HeaderRow />
          {this.state.rows.map((item, i) => (
            <InfoRow key={i} onClick={() => this.handleClick(i)} {...this.state.rows[i]} />
          ))}
        </div>
      );
    }
  }

export default App;
