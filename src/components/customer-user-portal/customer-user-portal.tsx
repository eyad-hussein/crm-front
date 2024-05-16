import Link from "next/link";

export default function CustomerUserPortal() {
  return (
    <section className='flex flex-col w-[80%] pr-10'>
      <nav className='flex justify-between items-center'>
        <Link className='flex-1' href={"/"}>
          Activity Timeline
        </Link>
        <Link className='flex-1' href={"/"}>
          Notes
        </Link>
        <Link className='flex-1' href={"/"}>
          Tasks
        </Link>
        <Link className='flex-1' href={"/"}>
          Meetings
        </Link>
        <Link className='flex-1' href={"/"}>
          Deaks
        </Link>
      </nav>
    </section>
  );
}
