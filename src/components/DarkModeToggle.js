import React, { Component } from 'react';
import '../style.scss';
import { CgDarkMode } from "react-icons/cg";

class DarkModeToggle extends Component {
  constructor(props) {
    super(props);
    //load settings from local storage
    if(JSON.parse(localStorage.getItem('DARK_MODE')) === true) {
      document.body.classList.add('dark-mode');
    }

    this.state = {
      darkMode: JSON.parse(localStorage.getItem('DARK_MODE'))
    }

    this.handleModeChange = this.handleModeChange.bind(this);
  }
//function for Mode Change
  handleModeChange() {
    if(!this.state.darkMode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

    this.setState({
      darkMode: (!this.state.darkMode)
    });
    localStorage.setItem('DARK_MODE', !this.state.darkMode);
  }

  render() {
    return (
      <a onClick={this.handleModeChange} className='toggleTheme'><CgDarkMode /></a>
    );
  }
}

export default DarkModeToggle;