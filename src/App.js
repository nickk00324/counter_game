import React, { Fragment, useState, useEffect } from 'react';
import Header from './Header';
import CountButton from './CountButton';
import GameOver from './GameOver';
import './App.css';

function App() {

  const initialTarget = () => {
    const prob = .3;
    let target = 0;
    const random = Math.random();
    prob < random ? target = 1000 : target = 10;
    return target;
  }


  const [target, setTarget] = useState(initialTarget);
  const [isOver, setIsOver] = useState(false);
  const [highOrLow] = useState( target === 10 ? 'low' : 'high');


  const updateCount = () => {
    if(!isOver) {
      setTarget(prevTarget => {
        return prevTarget - 1;
      });
    } else {
      console.log('game is over');
    }
  }

  const resetGame = () => {
    setIsOver(false);
    setTarget(initialTarget);
    console.log('ive been hit');
  }

  useEffect( () => {
    if(target === 0){
      setIsOver(true);
    }
  },[target])


  return (
    <Fragment>
      <Header initialTarget={target}/>
      {!isOver ? 
        <CountButton updateCount={updateCount} /> 
        :
        <GameOver highOrLow={highOrLow} resetGame={resetGame}/>   
      }
      
    </Fragment>
  );
}

export default App;
