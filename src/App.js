import React, { useState } from 'react'
import './style.css';
import Die from './Die'

function App() {

  const [dice, setDice] = React.useState(allNewDice())

  
  function allNewDice() {
    let newArray = []
    for(let i = 0; i < 10; i++){
      let randomNum = Math.floor(Math.random() * 6 +1);
      newArray.push(randomNum)
    }
    return newArray
  }

  const diceElements = dice.map(die => <Die value={die}/>)
 
  function rollDice() {
    setDice(allNewDice())
  }

  return (
    <main>
      <div className='game-play'>

        {/* <h1 className='title'>Tenzies</h1>
        <p className='instructions'>Roll until all dice are the same. Click keach die to freeze it at its current value between rolls. Easy fun!</p> */}

          <div className='dice-container'>
            {diceElements}
          </div>
          <button 
          onClick={rollDice}
          >
            Roll dice
          </button>
      </div>
    </main>
  );
}

export default App;
