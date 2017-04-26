import React from 'react';
import './ProgressBar.css';

export const ProgressBar = ({percent}) => {
  const style = {width: `${percent}%`};
  return (
    <div className="row">
      <div className="medium-11 medium-centered column text-center">
        <div className="row align-middle">
          <div className="small-1 columns">
            <i className="fa fa-arrow-right fa-3x progressbar-arrow-right"></i>
          </div>
          <div className="small-10 columns align-self-middle">
            <div className="progress fdm-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100">
              <span className="progress-meter fdm-progress-meter" style={style}>
              </span>
            </div>
          </div>
          <div className="small-1 columns">
            <i className="fa fa-key fa-3x"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
