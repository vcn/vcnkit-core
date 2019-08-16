import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import * as MessageBar from '@vcnkit/core/MessageBar';
import * as Button from '@vcnkit/core/Button';

import markdown from './messagebar.md';

storiesOf('Basics|MessageBar', module)
    .add('message', () => (
        <MessageBar.Message>
            This is a MessageBar. It can provide information to the user and optionally contain an action.
        </MessageBar.Message>
    ), { notes: { markdown } })
    .add('info', () => (
        <MessageBar.Info>
            This is a MessageBar. It can provide information to the user and optionally contain an action.
        </MessageBar.Info>
    ), { notes: { markdown } })
    .add('error', () => (
        <MessageBar.Error >
            This variant of the MessageBar can be used to display errors messages.
        </MessageBar.Error>
    ), { notes: { markdown } })
    .add('warning', () => (
        <MessageBar.Warning>
            This variant of the MessageBar can be used to warn the user.
        </MessageBar.Warning>
    ), { notes: { markdown } })
    .add('experimental', () => (
        <MessageBar.Experimental>
            Inform the user that the current feature or page is experimental and can change at any stage.
        </MessageBar.Experimental>
    ), { notes: { markdown } })
    .add('with action', () => (
        <MessageBar.Experimental
            actions={ <Button.Primary onClick={ action('click') }>Opt-out</Button.Primary> }
        >
            Inform the user that the current feature or page is experimental and can change at any stage.
        </MessageBar.Experimental>
    ), { notes: { markdown } });