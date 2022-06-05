import React, { useState, useEffect }from 'react'
import './style.css';
import Die from './Die'
import {nanoid} from 'nanoid'


function App() {



  const [dice, setDice] = React.useState(allNewDice())

  function getNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }

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
    setDice( prevDice => prevDice.map( die => {
           if(die.id === id){
              return {
                ...die, 
                isHeld: !die.isHeld
              }
          }else{
              return die
          }
      })
    )
    console.log(`Here is the ID: ${id}`)
  }

  const [tenzies, setTenzies] =React.useState(false)

  React.useEffect( () => {
     const allTrue = dice.every( die => die.isHeld )
     const allSame = dice.every( die => die.value )
     if(allTrue && allSame){
       setTenzies(true)
       console.log(`WIN`)
     }
    // console.log(`Dice state changed`)
  }, [dice])


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
    setDice( prevDice =>  prevDice.map( die => {
      return die.isHeld ? 
      die :
      getNewDie()
    }))
  }



  return (
    <main>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="dice-container">
            {diceElements}
        </div>
        <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
  )
}

export default App;
