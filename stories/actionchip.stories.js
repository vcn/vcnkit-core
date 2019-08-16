import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import * as Icons from '@vcnkit/core/Icons';
import ActionChip from '@vcnkit/core/ActionChip';

import markdown from './actionchip.md';

storiesOf('Basics|ActionChip', module)
    .addDecorator(story => (
        <div style={ { maxWidth: '36em', background: '#F5F5F5', padding: '1em' } }>
            { story() }
        </div>
    ))
    .add('primary', () => (
        <ActionChip
            icon={ <Icons.PowerSettingsNew /> }
            onClick={ action('clicked') }
        >
            Power on
        </ActionChip>
    ), { notes: { markdown } })
    .add('loading', () => (
        <ActionChip
            icon={ <Icons.PowerSettingsNew /> }
            onClick={ action('clicked') }
            loading
        >
            Powering off
        </ActionChip>
    ), { notes: { markdown } })
    .add('disabled', () => (
        <ActionChip
            icon={ <Icons.Build /> }
            onClick={ action('clicked')  }
            disabled
        >
            Build now
        </ActionChip>
    ), { notes: { markdown } });