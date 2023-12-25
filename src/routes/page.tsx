import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Render } from '@/components/Render';
import { Playground } from '@/components/Playground';
import { ErrorBoundaryFallback } from '@/components/ErrorBoundaryFallback';

import './index.css';

const initCode = `
() => <div>123</div>
`;

const Index = () => {
  const [code, setCode] = useState(initCode);

  return (
    <div className="container-box">
      <ErrorBoundary fallback={<ErrorBoundaryFallback code={code} />}>
        <Render code={code} />
      </ErrorBoundary>

      <Playground value={code} onChange={setCode} />
    </div>
  );
};

export default Index;
