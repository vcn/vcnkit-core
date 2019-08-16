import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ActionBar from '@vcnkit/core/ActionBar';
import ActionChip from '@vcnkit/core/ActionChip';
import * as Icons from '@vcnkit/core/Icons';
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
            <Button.Destructive
                onClick={ action('clicked') }
            >
                Verwijderen
            </Button.Destructive>
            <Button.Primary
                onClick={ action('clicked') }
            >
                Annuleren
            </Button.Primary>
            <Button.Primary
                onClick={ action('clicked') }
                disabled
            >
                Opslaan
            </Button.Primary>
        </ActionBar>
    ), { notes: { markdown: actionBarMarkdown } })
    .add('with chips', () => (
        <ActionBar>
            <ActionChip
                icon={ <Icons.PowerSettingsNew /> }
                onClick={ action('clicked') }
            >
                Power on
            </ActionChip>
            <ActionChip
                icon={ <Icons.PowerSettingsNew /> }
                onClick={ action('clicked') }
                loading
            >
                Powering off
            </ActionChip>
            <ActionChip
                icon={ <Icons.Build /> }
                onClick={ action('clicked') }
                disabled
            >
                Build
            </ActionChip>
        </ActionBar>
    ), { notes: { markdown: actionBarMarkdown } });