interface InvertedButtonProps {
  src: string;
  text: string;
}

export default function InvertedButton({ src, text }: InvertedButtonProps) {
  return (
    <button className='flex justify-start items-center bg-white text-black border border-black font-bold py-2 px-3 rounded-md text-sm'>
      <img src={src} className='w-5 h-5 mr-2' alt='' />
      <span>{text}</span>
    </button>
  );
}
