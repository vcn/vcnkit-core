import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import * as Icons from '@vcnkit/core/Icons';

import markdown from './icons.md';

const IconContainer = styled.div`
    display:        flex;
    flex-direction: row;
    flex-wrap:      wrap;
    font-family: "Roboto", sans-serif;
    font-size:   .875rem;
    color:       hsla(0, 0%, 0%, .87);
    svg {
        width:  2rem;
        height: 2rem;
        fill: hsla(0, 0%, 0%, .87);
    }
    & > div {
        display:         flex;
        flex-direction:  column;
        align-items:     center;
        justify-content: center;
        height: 8rem;
        width:  8rem;
        & > span {
            margin: 1rem 0 0;
        }
    }
`;

const IconOverview = () => (
    <IconContainer>
        { Object.keys(Icons).map(icon => (
            <div 
                key={ icon }
            >
                { React.createElement(Icons[ icon ]) }
                <span>{ icon }</span>
            </div>
        )) }
    </IconContainer>
);

storiesOf('Basics|Icons', module)
    .add('overview', () => (
        <IconOverview />
    ), { notes: { markdown } });