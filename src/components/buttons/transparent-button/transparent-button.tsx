interface TransparentButtonProps {
  src: string;
  text: string;
}

export default function TransparentButton({
  src,
  text,
}: TransparentButtonProps) {
  return (
    <button className='flex justify-between items-center text-black font-bold py-2 px-4 rounded text-sm'>
      <img src={src} alt='icon' className='w-5 h-5 mr-2' />
      <span>{text}</span>
    </button>
  );
}
