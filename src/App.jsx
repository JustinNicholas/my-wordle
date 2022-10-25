import { useState } from 'react';

import './App.css';

function App() {

  const keyPhrase = ['H', 'I', 'R', 'E', 'D']
  const [guessPhrase, setGuessPhrase] = useState([]);

  const addLetterToGuess = (id, e) => {
    if (guessPhrase.length < 5){
      setGuessPhrase([...guessPhrase, id])
      // need to add the letter to the box in the dom.
      console.log(id);
      console.log('guess phrase', guessPhrase);
    }
  }

  const removeLetterFromGuess = () => {
    guessPhrase.pop();
    console.log('guess phrase', guessPhrase);
  }

  return (
    <div className="App">
      <header className="App-header">
        <br />
        <h1 className='app-title'>Justin's Wordle</h1>
      </header>
      <main>
      <div className='row-1 guess-row'>
          <div className='letter-box' id='1'></div>
          <div className='letter-box' id='2'></div>
          <div className='letter-box' id='3'></div>
          <div className='letter-box' id='4'></div>
          <div className='letter-box' id='5'></div>
        </div>
        <div className='row-2 guess-row'>
          <div className='letter-box' id='6'></div>
          <div className='letter-box' id='7'></div>
          <div className='letter-box' id='8'></div>
          <div className='letter-box' id='9'></div>
          <div className='letter-box' id='10'></div>
        </div>
        <div className='row-3 guess-row'>
          <div className='letter-box' id='11'></div>
          <div className='letter-box' id='12'></div>
          <div className='letter-box' id='13'></div>
          <div className='letter-box' id='14'></div>
          <div className='letter-box' id='15'></div>
        </div>
        <div className='row-4 guess-row'>
          <div className='letter-box' id='16'></div>
          <div className='letter-box' id='17'></div>
          <div className='letter-box' id='18'></div>
          <div className='letter-box' id='19'></div>
          <div className='letter-box' id='20'></div>
        </div>
        <div className='row-5 guess-row'>
          <div className='letter-box' id='21'></div>
          <div className='letter-box' id='22'></div>
          <div className='letter-box' id='23'></div>
          <div className='letter-box' id='24'></div>
          <div className='letter-box' id='25'></div>
        </div>
        <div className='row-6 guess-row'>
          <div className='letter-box' id='26'></div>
          <div className='letter-box' id='27'></div>
          <div className='letter-box' id='28'></div>
          <div className='letter-box' id='29'></div>
          <div className='letter-box' id='30'></div>
        </div>
        <br />
        <div className='letter-row'>
          <h1 onClick={(e) => addLetterToGuess('Q', e)} className='letter-button' id='Q'>Q</h1>
          <h1 className='letter-button' id='W'>W</h1>
          <h1 className='letter-button' id='E'>E</h1>
          <h1 className='letter-button' id='R'>R</h1>
          <h1 className='letter-button' id='T'>T</h1>
          <h1 className='letter-button' id='Y'>Y</h1>
          <h1 className='letter-button' id='U'>U</h1>
          <h1 className='letter-button' id='I'>I</h1>
          <h1 className='letter-button' id='O'>O</h1>
          <h1 className='letter-button' id='P'>P</h1>
        </div>
        <div className='letter-row'>
          <h1 className='letter-button' id='A'>A</h1>
          <h1 className='letter-button' id='S'>S</h1>
          <h1 className='letter-button' id='D'>D</h1>
          <h1 className='letter-button' id='F'>F</h1>
          <h1 className='letter-button' id='G'>G</h1>
          <h1 className='letter-button' id='H'>H</h1>
          <h1 className='letter-button' id='J'>J</h1>
          <h1 className='letter-button' id='K'>K</h1>
          <h1 className='letter-button' id='L'>L</h1>
        </div>
        <div className='letter-row'>
          <h1 className='letter-button' id='Enter'>Enter</h1>
          <h1 className='letter-button' id='Z'>Z</h1>
          <h1 className='letter-button' id='X'>X</h1>
          <h1 className='letter-button' id='C'>C</h1>
          <h1 className='letter-button' id='V'>V</h1>
          <h1 className='letter-button' id='B'>B</h1>
          <h1 className='letter-button' id='N'>N</h1>
          <h1 className='letter-button' id='M'>M</h1>
          <h1 onClick={() => removeLetterFromGuess()} className='letter-button' id='Back'>Back</h1>
        </div>
      </main>
    </div>
  );
}

export default App;
