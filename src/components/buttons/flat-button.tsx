interface FlatButtonProps {
  text: string;
}

export default function FlatButton({ text }: FlatButtonProps) {
  return (
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-36 text-sm'>
      {text}
    </button>
  );
}
