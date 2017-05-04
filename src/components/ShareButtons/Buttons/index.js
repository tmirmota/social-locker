import React, { Component } from 'react';
import './Buttons.css';


class Buttons extends Component {
  componentWillMount() {
    // Disable first button
    const { number } = this.props;
    const isFirstButton = number === 0;
    if (isFirstButton) {
      return this.setState({ disabled: true });
    }
    const { title } = this.props;
    // Get disabled information from local storage
    const disabled = localStorage.getItem(title) !== null;
    this.setState({ disabled });
  }

  buttonClick = () => {
    this.props.handleClick();

    // Disable button
    console.log(1);
    this.setState({ disabled: true });

    // Store state in local Storage
    const { title } = this.props;
    localStorage.setItem(title, true);
  }


  render() {
    const { title, icon, button, url } = this.props;
    const { disabled } = this.state;
    const styleIcon = `${icon} fa-3x`;
    const iconColor = `icon-${title}`;
    const buttonColor = `button-${title}`;
    return (
      <div className="small-4 medium-2 columns">
        <div className="button-icon-container">
          <i className={styleIcon} id={iconColor} disabled={disabled}></i>
        </div>
        <div>
          <a href={url} target="_blank">
            <button
              type="button"
              className="button"
              id={buttonColor}
              disabled={disabled}
              onClick={this.buttonClick}
            >
              {button}
            </button>
          </a>
        </div>
      </div>
    );
  }
}

 export default Buttons;
