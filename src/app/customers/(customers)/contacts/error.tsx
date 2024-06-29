"use client";

import { logger } from "@/lib/logger";

interface ContactsPageErrorProps {
  error: Error & { digest?: string };
}

export default function ContactsPageError({ error }: ContactsPageErrorProps) {
  logger.error(error);
  return <div>Contacts page error</div>;
}
