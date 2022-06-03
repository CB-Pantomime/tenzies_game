
import './style.css';
import Die from './Die'

function App() {
  return (
    <main>
      <div className='game-play'>

        {/* <h1 className='title'>Tenzies</h1>
        <p className='instructions'>Roll until all dice are the same. Click keach die to freeze it at its current value between rolls. Easy fun!</p> */}

          <div className='dice-container'>
            <Die value="1"/>
            <Die value="2"/>
            <Die value="3"/>
            <Die value="4"/>
            <Die value="5"/>
            <Die value="6"/>
            <Die value="1"/>
            <Die value="1"/>
            <Die value="1"/>
            <Die value="1"/>
          </div>

      </div>
    </main>
  );
}

export default App;
