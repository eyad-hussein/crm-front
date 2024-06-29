"use client";

import { logger } from "@/lib/logger";

interface ClosuresPageErrorProps {
  error: Error & { digest?: string };
}

export default function ClosuresPageError({ error }: ClosuresPageErrorProps) {
  logger.error(error);
  return <div>Closures page error</div>;
}
