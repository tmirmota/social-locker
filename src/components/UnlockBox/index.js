import React from 'react';
import './UnlockBox.css';

export const UnlockBox = ({ percent }) => {
  return (
    <div className="row">
      <div className="small-10 small-centered medium-5 medium-centered column text-center unlockbox">
        <div className="unlockbox-content">
          <i className="fa fa-lock fa-4x unlockbox-lock"></i>
        </div>
      </div>
    </div>
  );
}
