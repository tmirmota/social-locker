import React from 'react';
import './UnlockBox.css';

export const UnlockBox = ({ percent, gameComplete }) => {
  const startAtZero = percent === 25;
  const greenOpacity = startAtZero ? 0 : percent / 100;

  // Styling
  const boxBackground = `rgba(236, 246, 231, ${greenOpacity})`;
  const boxBorder = `rgba(95, 189, 108, ${greenOpacity})`;
  const boxColor = {
    backgroundColor: boxBackground,
    borderColor: boxBorder
  };

  return (
    <div className="row">
      <div className="small-10 small-centered medium-5 medium-centered column text-center unlockbox" style={startAtZero ? null : boxColor}>
        <div className="unlockbox-content">
        { gameComplete ?
            <div>
              <h4 className="unlockbox-subheading">Use Code: <h2 className="unlockbox-heading">SHARE20</h2></h4>
              <a href="food.ee" className="button">Order Now</a>
              <p></p>
            </div> :
            <i className="fa fa-lock fa-4x unlockbox-lock"></i> }
        </div>
      </div>
    </div>
  );
}
