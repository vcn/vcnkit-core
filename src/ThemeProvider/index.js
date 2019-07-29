import * as React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const defaultTheme = {
    primaryColor:         '#5282B5',
    backgroundColor:      '#F5F5F5',
    paperBackgroundColor: '#FFFFFF',

    dividerColor:        'hsla(0, 0%, 0%, .08)',
    disabledColor:       'hsla(0, 0%, 0%, .12)',
    opaqueDisabledColor: '#E0E0E0',
    focusColor:          'hsla(0, 0%, 0%, .06)',

    destructiveColor: '#E53935',

    inactiveScrollColor: 'hsla(0, 0%, 0%, .12)',
    activeScrollColor:   'hsla(0, 0%, 0%, .36)',

    fontFamily:          '"Roboto", Arial, Helvetica, sans-serif',
    monospaceFontFamily: '"Roboto Mono", monospace',

    iconColor:         'hsla(0, 0%, 0%, .57)',
    disabledIconColor: 'hsla(0, 0%, 0%, .17)',
    invertedIconColor: '#FFF',

    textColor:               'hsla(0, 0%, 0%, .87)',
    subtleTextColor:         'hsla(0, 0%, 0%, .67)',
    invertedTextColor:       '#FFF',
    invertedSubtleTextColor: 'hsla(0, 100%, 100%, .87)',
};

const ThemeProvider = ({ theme, children }) => {
    const combinedTheme = {
        vcnkit: { 
            ...defaultTheme,
            ...theme,
        },
    };

    return (
        <StyledThemeProvider
            theme={ combinedTheme }
        >
            { children }
        </StyledThemeProvider>
    );
};

ThemeProvider.propTypes = {
    theme: PropTypes.object,
};

export default ThemeProvider;