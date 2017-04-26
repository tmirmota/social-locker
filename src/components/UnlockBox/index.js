import React from 'react';
import './UnlockBox.css';

export const UnlockBox = ({ percent }) => {
  // Styling
  const greenOpacity = percent / 50;
  const boxGreen = `rgba(74, 190, 46, .${greenOpacity})`;
  const boxColor = { backgroundColor: boxGreen };
  console.log(boxGreen);

  const complete = percent === 100;

  return (
    <div className="row">
      <div className="small-10 small-centered medium-5 medium-centered column text-center unlockbox" style={boxColor}>
        <div className="unlockbox-content">
        { complete ?
            <div>
              <h4 className="unlockbox-subheading">Use Code:</h4>
              <h2 className="unlockbox-heading">FOODCOMA</h2>
            </div> :
            <i className="fa fa-lock fa-4x unlockbox-lock"></i> }
        </div>
      </div>
    </div>
  );
}
