import React, { Component } from 'react';
import './Buttons.css';


class Buttons  extends Component {
  state = {
    disabled: false
  }

  disabledButton() {
    this.setState({ disabled: true });
  }

  buttonClick = () => {
    this.props.handleClick();
    this.disabledButton()
  }

  componentWillMount() {
    const { number } = this.props;
    const isFirstButton = number === 0;
    if (isFirstButton) {
      this.disabledButton();
    }
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
