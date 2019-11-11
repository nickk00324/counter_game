import React from 'react';
import './GameOver.css';

const GameOver = ({highOrLow, resetGame}) => {
    if(highOrLow === 'high'){
        return (
          <div className="game-over-text">
            <button className="reset-button" onClick={resetGame}>
              reset
            </button>
            <p>great, you did it.</p>
          </div>
        );
    } else {
        return (
          <div className="game-over-text buttons">
            <button className="reset-button" onClick={resetGame}>
              reset
            </button>
            <p className="low">yay! you're so talented!</p>
          </div>
        );
    }
}

export default GameOver;