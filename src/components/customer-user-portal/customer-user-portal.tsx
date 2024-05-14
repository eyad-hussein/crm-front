import Link from "next/link";

export default function CustomerUserPortal() {
  return (
    <section className='flex flex-col w-[80%] pr-10'>
      <nav className='flex justify-between items-center'>
        <Link className='flex-1' href={"/"}>
          Prospect
        </Link>
        <Link className='flex-1' href={"/"}>
          Contact
        </Link>
        <Link className='flex-1' href={"/"}>
          Follow Up
        </Link>
        <Link className='flex-1' href={"/"}>
          Proposed
        </Link>
        <Link className='flex-1' href={"/"}>
          Close
        </Link>
      </nav>
    </section>
  );
}
