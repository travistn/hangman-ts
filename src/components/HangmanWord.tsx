type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

const HangmanWord = ({ guessedLetters, wordToGuess, reveal = false }: HangmanWordProps) => {
  return (
    <div className='flex flex-row gap-4 text-[96px] font-bold uppercase'>
      {wordToGuess.split('').map((letter, index) => (
        <span key={index} className='border-b-8 border-black'>
          <span
            className={`${guessedLetters.includes(letter) || reveal ? 'visible' : 'invisible'} ${
              !guessedLetters.includes(letter) && reveal ? 'text-red-500' : 'text-black'
            }`}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
