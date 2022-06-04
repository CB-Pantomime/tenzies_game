import React, { useState } from 'react'
import './style.css';
import Die from './Die'
import {nanoid} from 'nanoid'

function App() {

  const [dice, setDice] = React.useState(allNewDice())

  function allNewDice() {
    let newDice = []
    for(let i = 0; i < 10; i++){
      let randomNum = Math.floor(Math.random() * 6 +1);
      newDice.push({
        value:randomNum, 
        isHeld: false,
        id: nanoid()
      })
    }
    return newDice
  }

  function holdDice(id) {
    console.log(id)
  }

  const diceElements = dice.map((die) => {
      return (
        <Die 
        key={die.id} 
        value={die.value}
        isHeld={die.isHeld}
        id={die.id}
        handleClick={() => holdDice(die.id)}
        />
      )
  })
 
  function rollDice() {
    setDice(allNewDice())
  }



  return (
    <main>
        <div className="dice-container">
            {diceElements}
        </div>
        <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
)
}

export default App;
