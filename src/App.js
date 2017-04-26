import React, { Component } from 'react';
import './App.css';

// Components
import { ProgressBar } from './components/ProgressBar';
import { UnlockBox } from './components/UnlockBox';
import ShareButtons from './components/ShareButtons';

class App extends Component {
  state = {
    clicks: 1,
    percent: 20
  }

  handleClick = () => {
    // Set Goal Here
    const goal = 4;
    const clicks = this.state.clicks + 1;
    const percent = clicks / goal * 100;
    this.setState({ percent, clicks });
  }
  render() {
    const { percent} = this.state;
    return (
      <div className="wrapper">
        <div className="container socialLocker-container">

          <section className="row">
            <div className="small-12 column text-center header-image">
              <img src="https://cdn2.hubspot.net/hubfs/2116999/shareLocker/socialLocker-header.png" alt="Foodee Share Program" />
            </div>
          </section>

          <ProgressBar percent={percent} />

          <section className="row">
            <div className="small-12 column text-center">
              <p className="sociallocker-copy">Unlock the hidden Foodee prize. Complete 4 of 6 tasks below.</p>
            </div>
          </section>

          <UnlockBox percent={percent} />
          <ShareButtons handleClick={this.handleClick} clicks={this.state.clicks} />
        </div>
      </div>
    );
  }
}

export default App;
