import React from 'react';

import { storiesOf } from '@storybook/react';

import * as Panel from '@vcnkit/core/ExpansionPanel';

import panelMarkDown from './expansionpanel.md';

storiesOf('Basics|ExpansionPanel', module)
    .addDecorator(story => (
        <div style={ { maxWidth: '36em' } }>
            { story() }
        </div>
    ))
    .add('examples', () => (
        <div>
            <Panel.Panel>
                <Panel.Header>Preferences</Panel.Header>
                <Panel.Content>
                    <div style={ { height: '300px' } }>Preferences</div>
                </Panel.Content>
            </Panel.Panel>
            <Panel.Panel>
                <Panel.Header>E-mail settings</Panel.Header>
                <Panel.Content>
                    <div style={ { height: '200px' } }>E-mail settings</div>
                </Panel.Content>
            </Panel.Panel>
            <Panel.Panel>
                <Panel.Header>General</Panel.Header>
                <Panel.Content>
                    <div style={ { height: '100px' } }>General</div>
                </Panel.Content>
            </Panel.Panel>
        </div>
    ), { notes: { markdown: panelMarkDown } });