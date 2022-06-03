
import './style.css';
import Die from './Die'

function App() {
  return (

    function allNewDice() {
      let newArray = []
      for(let i = 0; i < 10; i++){
        let randomNum = Math.floor(Math.random() * 6 +1);
        newArray.push(randomNum)
      }
      console.log(newArray)
    }
   


    <main>
      <div className='game-play'>

        {/* <h1 className='title'>Tenzies</h1>
        <p className='instructions'>Roll until all dice are the same. Click keach die to freeze it at its current value between rolls. Easy fun!</p> */}

          <div className='dice-container'>
            <Die value="1"/>
            
          </div>

      </div>
    </main>
  );
}

export default App;
