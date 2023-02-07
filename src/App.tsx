import { useState } from 'react';

import './App.css';
import words from './wordList.json';

const App = () => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return <div></div>;
};

export default App;
