import React from 'react';
import * as babel from '@babel/standalone';

const transformed = (code: string) =>
  babel.transform(code, {
    presets: ['react'],
  })?.code || '() => React.createElement("div", null, "Something went wrong")';

window.React = React;

export const Render = ({ code }: { code: string }) => {
  // eslint-disable-next-line no-eval
  const Component = eval(transformed(code));

  return <Component />;
};
