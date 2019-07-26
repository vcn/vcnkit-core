import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import * as Button from '@vcnkit/core/Button';

import buttonMarkdown from './button.md';

storiesOf('Basics|Button', module)
    .add('primary', () => (
        <Button.Primary
            onClick={ action('clicked') }
        >
            Opslaan
        </Button.Primary>
    ), { notes: { markdown: buttonMarkdown } })
    .add('destructive', () => (
        <Button.Destructive
            onClick={ action('clicked') }
        >
            Verwijderen
        </Button.Destructive>
    ), { notes: { markdown: buttonMarkdown } })
    .add('disabled', () => (
        <Button.Primary
            onClick={ action('clicked') }
            disabled
        >
            Verwijderen
        </Button.Primary>
    ), { notes: { markdown: buttonMarkdown } })