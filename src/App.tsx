import { useState } from 'react';

import HangmanDrawing from './components/HangmanDrawing';
import HangmanWord from './components/HangmanWord';
import HangmanKeyboard from './components/HangmanKeyboard';
import './App.css';
import words from './wordList.json';

const App = () => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div className='w-[80%] flex flex-col gap-8 items-center m-auto'>
      <div className='text-[24px]'>Lose Win</div>
      <HangmanDrawing />
      <HangmanWord />
      <div className='self-stretch'>
        <HangmanKeyboard />
      </div>
    </div>
  );
};

export default App;
