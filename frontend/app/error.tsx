"use client";

import ErrorState from "@/components/ErrorState";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorState
      title="Something interrupted the archive"
      message={error.message || "An unexpected rendering error occurred."}
      actionLabel="Try again"
      onRetry={reset}
    />
  );
}
