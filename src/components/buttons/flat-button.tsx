import Link from "next/link";

interface FlatButtonProps {
  text: string;
  href: string;
}

export default function FlatButton({ text, href }: FlatButtonProps) {
  return (
    <Link
      href={href}
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-36 text-sm'>
      {text}
    </Link>
  );
}
