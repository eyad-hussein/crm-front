"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import cancelIcon from "../../../../public/assets/images/icons/close.png";

export default function CancelButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className='max-h-10 max-w-10'>
      <img
        src={cancelIcon.src}
        alt='close button'
        className='h-full w-full'></img>
    </button>
  );
}
