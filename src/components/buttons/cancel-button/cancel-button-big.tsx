"use client";
import { useRouter } from "next/navigation";

export default function CancelButtonBig() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className='bg-white hover:bg-gray-300 border border-gray-500 text-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
      Cancel
    </button>
  );
}
