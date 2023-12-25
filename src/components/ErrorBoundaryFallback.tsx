import { useEffect } from 'react';
import { useErrorBoundary } from 'react-error-boundary';

export const ErrorBoundaryFallback = ({ code }: { code: string }) => {
  const { resetBoundary } = useErrorBoundary();

  useEffect(() => {
    resetBoundary();
  }, [code]);

  return <div>Something went wrong</div>;
};
