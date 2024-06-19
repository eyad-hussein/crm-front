export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className='flex justify-center items-center bg-primary-dark h-screen w-screen'>
      {children}
    </section>
  );
}
