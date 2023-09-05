import React from 'react';
import './style.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__svg">
        <svg viewBox="0 0 270 270">
          <path
            className="header__path"
            id="curve"
            d="M126,150 c-1,-66 100,-66 99,1 c0,63 -100,65 -99,-1"
          />
          <text width="500">
            <textPath
              alignment-baseline="top"
              xlinkHref="#curve"
              className="header__title"
            >
              kamila semotánová 
            </textPath>
          </text>
        </svg>
      </div>
    </header>
  );
};
