"use client";
interface ProspectsPageErrorProps {
  error: Error & { digest?: string };
}

export default function ProspectsPageError({ error }: ProspectsPageErrorProps) {
  console.error(error);
  return <div>Contacts page error</div>;
}
