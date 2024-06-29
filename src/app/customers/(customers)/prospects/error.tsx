"use client";

import { logger } from "@/lib/logger";

interface ProspectsPageErrorProps {
  error: Error & { digest?: string };
}

export default function ProspectsPageError({ error }: ProspectsPageErrorProps) {
  logger.error(error);
  return <div>Prospects page error</div>;
}
