const HangmanWord = () => {
  const word = 'test';
  const guessedLetters = ['t', 'e'];

  return (
    <div className='flex flex-row gap-4 text-[96px] font-bold uppercase'>
      {word.split('').map((letter, index) => (
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
