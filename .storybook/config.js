import React from 'react';
import { configure, addParameters, addDecorator } from '@storybook/react';

import theme, { GlobalStyle } from './theme';

addDecorator(story => (
  <>
    <GlobalStyle />
    { story() }
  </>
));

addParameters({
  options: {
    theme,
  },
});

configure(
  [
    require.context('../src', true, /\.stories\.mdx$/),
    require.context('../src', true, /\.stories\.js$/),
  ],
  module,
);
