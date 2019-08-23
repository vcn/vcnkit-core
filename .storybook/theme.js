import { createGlobalStyle, css } from 'styled-components';
import { create } from '@storybook/theming';

export default create({
    base: 'light',

    appBg: '#F5F5F5',

    fontCode: '"Roboto Mono", monospace',

    textColor: 'hsla(0, 0%, 0%, .87)',

    brandTitle: '@vcnkit/core',
});

export const GlobalStyle = createGlobalStyle`

`;