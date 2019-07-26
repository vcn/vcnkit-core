import React from 'react';

import { storiesOf } from '@storybook/react';

import ActionBar from '@vcnkit/core/ActionBar';
import * as Button from '@vcnkit/core/Button';

import actionBarMarkdown from './actionbar.md';

storiesOf('Basics|ActionBar', module)
    .addDecorator(story => (
        <div style={ { maxWidth: '36em', background: '#F5F5F5' } }>
                { story() }
        </div>
    ))
    .add('with buttons', () => (
        <ActionBar>
            <Button.Destructive>
                Verwijderen
            </Button.Destructive>
            <Button.Primary>
                Annuleren
            </Button.Primary>
            <Button.Primary disabled>
                Opslaan
            </Button.Primary>
        </ActionBar>
    ), { notes: { markdown: actionBarMarkdown } });