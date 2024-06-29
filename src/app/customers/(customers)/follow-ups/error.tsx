"use client";

import { logger } from "@/lib/logger";

interface FollowUpsPageErrorProps {
  error: Error & { digest?: string };
}

export default function FollowUpsPageError({ error }: FollowUpsPageErrorProps) {
  logger.error(error);
  return <div>FollowUps page error</div>;
}
