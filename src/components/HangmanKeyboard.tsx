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

const HangmanKeyboard = () => {
  return (
    <div className='flex flex-row flex-wrap gap-2'>
      {keys.map((key) => (
        <button
          key={key}
          className='w-[100px] border-[3px] border-black bg-none aspect-square text-[40px] capitalize p-2 font-bold cursor-pointer [&:not(:disabled)]:hocus:bg-[hsl(200,_100%,_75%)]'>
          {key}
        </button>
      ))}
    </div>
  );
};

export default HangmanKeyboard;
