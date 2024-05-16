export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex justify-center w-full p-10 min-h-screen'>
      {children}
    </div>
  );
}