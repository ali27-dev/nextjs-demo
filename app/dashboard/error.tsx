
"use client";

import { useEffect } from "react";


export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // log to an error reporting service, e.g., Sentry
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Dashboard failed to load.</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Retry</button>
    </div>
  );
}