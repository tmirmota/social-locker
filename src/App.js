import React, { Component } from 'react';
import './App.css';

// Components
import { ProgressBar } from './components/ProgressBar';
import { UnlockBox } from './components/UnlockBox';
import ShareButtons from './components/ShareButtons';

class App extends Component {
  state = {
    clicks: 1,
    goal: 4, // Set goal here
    gameComplete: false
  }
  componentWillMount() {
    // // Use this to clear cache
    // localStorage.clear();
    const clicks = Number(localStorage.getItem('clicks'));
    const isStorage = clicks > 0;
    const { goal } = this.state;
    const gameComplete = clicks >= goal;
    if (isStorage) {
      this.setState({ clicks });
      if (gameComplete) {
        this.setState({ gameComplete: true });
      }
    }
  }


  handleClick = () => {
    const { goal } = this.state;
    const clicks = this.state.clicks + 1;
    const gameComplete = (clicks >= goal);
    this.setState({ clicks, gameComplete });

    // Record clicks in local storage
    localStorage.setItem('clicks', clicks);
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
    const { clicks, goal, gameComplete } = this.state;
    const percent = gameComplete ? 100 : clicks / goal * 100;
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
