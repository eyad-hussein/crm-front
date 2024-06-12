"use client";
interface TransparentButtonProps {
  text: string;
  src: string;
  handleOnClick?: () => void;
}

export default function TransparentButton({
  src,
  text,
  handleOnClick,
}: TransparentButtonProps) {
  return (
    <button
      onClick={handleOnClick}
      className='flex justify-between items-center text-black font-bold py-2 px-4 rounded text-sm'>
      <img src={src} alt='icon' className='w-5 h-5 mr-2' />
      <span>{text}</span>
    </button>
  );
}
