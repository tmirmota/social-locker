import React, { Component } from 'react';
import './App.css';

// Components
import { ProgressBar } from './components/ProgressBar';
import { UnlockBox } from './components/UnlockBox';
import ShareButtons from './components/ShareButtons';

class App extends Component {
  state = {
    clicks: 1,
    percent: 20,
    gameComplete: false
  }

  handleClick = () => {
    // Set Goal Here
    const goal = 4;
    const clicks = this.state.clicks + 1;
    const percent = clicks / goal * 100;
    const gameComplete = percent >= 100;
    this.setState({ percent, clicks, gameComplete });
  }
  handleGame = () => {
    const { gameComplete, clicks } = this.state;
    if (gameComplete) {
      return (
        <p className="sociallocker-app-copy">Congratulations!
          <br />
          <strong>Completed tasks, use promo code!</strong>
        </p>
      );
    } else {
      return (
        <p className="sociallocker-app-copy">Unlock the hidden Foodee Rewards promo code.
          <br />
          <strong>Completed {clicks} of 4 tasks below.</strong>
        </p>
      );
    }
  }

  render() {
    const { percent, clicks, gameComplete } = this.state;
    return (
      <div className="wrapper">
        <div className="container socialLocker-container">

          <section className="row">
            <div className="small-12 column text-center header-image">
              <img src="https://cdn2.hubspot.net/hubfs/2116999/shareLocker/socialLocker-header.png" alt="Foodee Share Program" />
            </div>
          </section>

          <ProgressBar percent={percent} gameComplete={gameComplete} />

          <section className="row">
            <div className="small-12 column text-center">
              {this.handleGame()}
            </div>
          </section>

          <UnlockBox percent={percent} gameComplete={gameComplete} />
          <ShareButtons handleClick={this.handleClick} clicks={clicks} />

          <footer className="row footer-container">
            <div className="small-12 column text-center">
              <hr />
              <p className="footer-copy"><strong>Work Hard, Eat Well.</strong> Curated menus from top local restaurants delivered to your office.</p>
              <a href="https://food.ee/" target="_blank"><img src="https://cdn2.hubspot.net/hubfs/2116999/automation/grey_logo.png" alt="Foodee Logo" width="100"/></a>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
