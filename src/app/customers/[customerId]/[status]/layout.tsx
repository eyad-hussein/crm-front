export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function CustomerProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className='p-10'>{children}</section>;
}
