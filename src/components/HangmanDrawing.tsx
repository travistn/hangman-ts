const HEAD = (
  <div className='w-[50px] h-[50px] rounded-full border-8 border-black absolute top-[49px] right-[-20px]' />
);
const BODY = <div className='w-[10px] h-[90px] bg-black absolute top-[98px] right-0' />;
const RIGHT_ARM = (
  <div className='w-[80px] h-[10px] bg-black absolute top-[130px] right-[-80px] rotate-[-30deg] origin-bottom-left' />
);
const LEFT_ARM = (
  <div className='w-[80px] h-[10px] bg-black absolute top-[130px] right-[10px] rotate-[30deg] origin-bottom-right' />
);
const RIGHT_LEG = (
  <div className='w-[80px] h-[10px] bg-black absolute top-[170px] right-[-70px] rotate-[60deg] origin-bottom-left' />
);
const LEFT_LEG = (
  <div className='w-[80px] h-[10px] bg-black absolute top-[170px] right-0 rotate-[-60deg] origin-bottom-right' />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div className='relative'>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className='h-[50px] w-[10px] bg-black absolute top-0 right-0' />
      <div className='h-[10px] w-[200px] bg-black ml-[120px]' />
      <div className='h-[400px] w-[10px] bg-black ml-[120px]' />
      <div className='h-[10px] w-[250px] bg-black' />
    </div>
  );
};

export default HangmanDrawing;
