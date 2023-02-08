const keys = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
};

const HangmanKeyboard = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) => {
  return (
    <div className='flex flex-row flex-wrap gap-2'>
      {keys.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            key={key}
            disabled={isActive || isInactive || disabled}
            className='w-[100px] border-[3px] border-black bg-none aspect-square text-[40px] capitalize p-2 font-bold cursor-pointer [&:not(:disabled)]:hocus:bg-[hsl(200,_100%,_75%)] disabled:opacity-30'
            onClick={() => addGuessedLetter(key)}>
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default HangmanKeyboard;
