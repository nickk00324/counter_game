import React from 'react';
import './CountButton.css';

const CountButton = ({updateCount}) => {
    return (
      <div className="buttons">
          <button className="count-button" onClick={updateCount}>
            click
          </button>
      </div>
    );
}

export default CountButton;