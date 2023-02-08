type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
};

const HangmanWord = ({ guessedLetters, wordToGuess }: HangmanWordProps) => {
  return (
    <div className='flex flex-row gap-4 text-[96px] font-bold uppercase'>
      {wordToGuess.split('').map((letter, index) => (
        <span key={index} className='border-b-8 border-black'>
          <span className={`${guessedLetters.includes(letter) ? 'visible' : 'invisible'}`}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
