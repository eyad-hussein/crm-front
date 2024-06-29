"use client";

import { logger } from "@/lib/logger";

interface ProposalsPageErrorProps {
  error: Error & { digest?: string };
}

export default function ProposalsPageError({ error }: ProposalsPageErrorProps) {
  logger.error(error);
  return <div>Proposals page error</div>;
}
