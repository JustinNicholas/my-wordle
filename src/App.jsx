import { useState } from 'react';
import { useRef } from 'react';

import './App.css';

function App() {

  const keyPhrase = ['H', 'I', 'R', 'E', 'D'];
  
  const [guessPhrase1, setGuessPhrase1] = useState([]);
  const [guessPhrase2, setGuessPhrase2] = useState([]);
  const [guessPhrase3, setGuessPhrase3] = useState([]);
  const [guessPhrase4, setGuessPhrase4] = useState([]);
  const [guessPhrase5, setGuessPhrase5] = useState([]);
  const [guessPhrase6, setGuessPhrase6] = useState([]);
  const [isWinner, setIsWinner] = useState(false);
  const [isOver, setIsOver] = useState(false);

  let currentId = useRef(1);
  const [currentGuess, setCurrentGuess] = useState(0);
  const getters = [guessPhrase1, guessPhrase2, guessPhrase3, guessPhrase4, guessPhrase5, guessPhrase6];
  const setters = [setGuessPhrase1, setGuessPhrase2, setGuessPhrase3, setGuessPhrase4, setGuessPhrase5, setGuessPhrase6];
  const currentGetter = getters[currentGuess];
  const setCurrentGetter = setters[currentGuess];

  const addLetterToGuess = (id, e) => {
    if (currentGetter.length < 5){
      setCurrentGetter([...currentGetter, id])
    }
  }

  const removeLetterFromGuess = () => {
    let copyArray = [...currentGetter];
    copyArray.pop();
    setCurrentGetter(copyArray);
  }

  const checkGuess = () => {
    if ( currentGetter.length < 5 ) {

    } else {
      let numCorrect = 0;
      for ( let i=0; i<5; i++) {
        if (keyPhrase.includes(currentGetter[i])) {
          let element = document.getElementById(currentId.current)
          element.classList.add('orange')
          let letterElement = document.getElementById(currentGetter[i])
          letterElement.classList.add('orange')
        }
        if( currentGetter[i] === keyPhrase[i] ){
          numCorrect++;
          let element = document.getElementById(currentId.current)
          element.classList.add('green')
          let letterElement = document.getElementById(currentGetter[i])
          letterElement.classList.add('green')
        } else {
          let letterElement = document.getElementById(currentGetter[i])
          letterElement.classList.add('dark')
        }
        if (numCorrect === 5) {
          setIsWinner(true);
          setIsOver(true);
        }
        currentId.current ++;
      }
      setCurrentGuess(currentGuess + 1);
      if(currentGuess+1 === 6){
        setIsOver(true);
      }
    }
  }

  const restartGame = (e) => {
    e.preventDefault();
    window.location.reload();
  }

  return (
    <div className="App">
      <header className="App-header">
        <br />
        <h1 className='app-title'>Jordle</h1>
        <p>Because Justin's version is just better.</p>
      </header>
      <main>
      <div className='row-1 guess-row'>
          <div className='letter-box' id='1'><h1 className='no-margin'>{guessPhrase1[0]}</h1></div>
          <div className='letter-box' id='2'><h1 className='no-margin'>{guessPhrase1[1]}</h1></div>
          <div className='letter-box' id='3'><h1 className='no-margin'>{guessPhrase1[2]}</h1></div>
          <div className='letter-box' id='4'><h1 className='no-margin'>{guessPhrase1[3]}</h1></div>
          <div className='letter-box' id='5'><h1 className='no-margin'>{guessPhrase1[4]}</h1></div>
        </div>
        <div className='row-2 guess-row'>
          <div className='letter-box' id='6'><h1 className='no-margin'>{guessPhrase2[0]}</h1></div>
          <div className='letter-box' id='7'><h1 className='no-margin'>{guessPhrase2[1]}</h1></div>
          <div className='letter-box' id='8'><h1 className='no-margin'>{guessPhrase2[2]}</h1></div>
          <div className='letter-box' id='9'><h1 className='no-margin'>{guessPhrase2[3]}</h1></div>
          <div className='letter-box' id='10'><h1 className='no-margin'>{guessPhrase2[4]}</h1></div>
        </div>
        <div className='row-3 guess-row'>
          <div className='letter-box' id='11'><h1 className='no-margin'>{guessPhrase3[0]}</h1></div>
          <div className='letter-box' id='12'><h1 className='no-margin'>{guessPhrase3[1]}</h1></div>
          <div className='letter-box' id='13'><h1 className='no-margin'>{guessPhrase3[2]}</h1></div>
          <div className='letter-box' id='14'><h1 className='no-margin'>{guessPhrase3[3]}</h1></div>
          <div className='letter-box' id='15'><h1 className='no-margin'>{guessPhrase3[4]}</h1></div>
        </div>
        <div className='row-4 guess-row'>
          <div className='letter-box' id='16'><h1 className='no-margin'>{guessPhrase4[0]}</h1></div>
          <div className='letter-box' id='17'><h1 className='no-margin'>{guessPhrase4[1]}</h1></div>
          <div className='letter-box' id='18'><h1 className='no-margin'>{guessPhrase4[2]}</h1></div>
          <div className='letter-box' id='19'><h1 className='no-margin'>{guessPhrase4[3]}</h1></div>
          <div className='letter-box' id='20'><h1 className='no-margin'>{guessPhrase4[4]}</h1></div>
        </div>
        <div className='row-5 guess-row'>
          <div className='letter-box' id='21'><h1 className='no-margin'>{guessPhrase5[0]}</h1></div>
          <div className='letter-box' id='22'><h1 className='no-margin'>{guessPhrase5[1]}</h1></div>
          <div className='letter-box' id='23'><h1 className='no-margin'>{guessPhrase5[2]}</h1></div>
          <div className='letter-box' id='24'><h1 className='no-margin'>{guessPhrase5[3]}</h1></div>
          <div className='letter-box' id='25'><h1 className='no-margin'>{guessPhrase5[4]}</h1></div>
        </div>
        <div className='row-6 guess-row'>
          <div className='letter-box' id='26'><h1 className='no-margin'>{guessPhrase6[0]}</h1></div>
          <div className='letter-box' id='27'><h1 className='no-margin'>{guessPhrase6[1]}</h1></div>
          <div className='letter-box' id='28'><h1 className='no-margin'>{guessPhrase6[2]}</h1></div>
          <div className='letter-box' id='29'><h1 className='no-margin'>{guessPhrase6[3]}</h1></div>
          <div className='letter-box' id='30'><h1 className='no-margin'>{guessPhrase6[4]}</h1></div>
        </div>
        <br />
        { !isOver ? (
        <div className='keyboard'>
          <div className='letter-row'>
            <h1 onClick={(e) => addLetterToGuess('Q', e)} className='letter-button' id='Q'>Q</h1>
            <h1 onClick={(e) => addLetterToGuess('W', e)} className='letter-button' id='W'>W</h1>
            <h1 onClick={(e) => addLetterToGuess('E', e)} className='letter-button' id='E'>E</h1>
            <h1 onClick={(e) => addLetterToGuess('R', e)} className='letter-button' id='R'>R</h1>
            <h1 onClick={(e) => addLetterToGuess('T', e)} className='letter-button' id='T'>T</h1>
            <h1 onClick={(e) => addLetterToGuess('Y', e)} className='letter-button' id='Y'>Y</h1>
            <h1 onClick={(e) => addLetterToGuess('U', e)} className='letter-button' id='U'>U</h1>
            <h1 onClick={(e) => addLetterToGuess('I', e)} className='letter-button' id='I'>I</h1>
            <h1 onClick={(e) => addLetterToGuess('O', e)} className='letter-button' id='O'>O</h1>
            <h1 onClick={(e) => addLetterToGuess('P', e)} className='letter-button' id='P'>P</h1>
          </div>
          <div className='letter-row'>
            <h1 onClick={(e) => addLetterToGuess('A', e)} className='letter-button' id='A'>A</h1>
            <h1 onClick={(e) => addLetterToGuess('S', e)} className='letter-button' id='S'>S</h1>
            <h1 onClick={(e) => addLetterToGuess('D', e)} className='letter-button' id='D'>D</h1>
            <h1 onClick={(e) => addLetterToGuess('F', e)} className='letter-button' id='F'>F</h1>
            <h1 onClick={(e) => addLetterToGuess('G', e)} className='letter-button' id='G'>G</h1>
            <h1 onClick={(e) => addLetterToGuess('H', e)} className='letter-button' id='H'>H</h1>
            <h1 onClick={(e) => addLetterToGuess('J', e)} className='letter-button' id='J'>J</h1>
            <h1 onClick={(e) => addLetterToGuess('K', e)} className='letter-button' id='K'>K</h1>
            <h1 onClick={(e) => addLetterToGuess('L', e)} className='letter-button' id='L'>L</h1>
          </div>
          <div className='letter-row'>
            <h1 onClick={() => checkGuess()} className='letter-button' id='Enter'>Enter</h1>
            <h1 onClick={(e) => addLetterToGuess('Z', e)} className='letter-button' id='Z'>Z</h1>
            <h1 onClick={(e) => addLetterToGuess('X', e)} className='letter-button' id='X'>X</h1>
            <h1 onClick={(e) => addLetterToGuess('C', e)} className='letter-button' id='C'>C</h1>
            <h1 onClick={(e) => addLetterToGuess('V', e)} className='letter-button' id='V'>V</h1>
            <h1 onClick={(e) => addLetterToGuess('B', e)} className='letter-button' id='B'>B</h1>
            <h1 onClick={(e) => addLetterToGuess('N', e)} className='letter-button' id='N'>N</h1>
            <h1 onClick={(e) => addLetterToGuess('M', e)} className='letter-button' id='M'>M</h1>
            <h1 onClick={() => removeLetterFromGuess()} className='letter-button' id='Back'>Back</h1>
          </div>
        </div>
        ) : (
          <div>
            <h1>{isWinner? "You are a real winner!" : "Better luck next time"}</h1>
            <button onClick={(e) => restartGame(e)} className='restart-button'>Restart</button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
