import React from 'react';
import { action } from '@storybook/addon-actions';

import Base from '../Base';
import * as Button from '@vcnkit/core/Button';

export default {
    title: 'Basics|Button',

    parameters: {
        component: Base,
    },
};

export const primary = () => <Button.Primary onClick={ action('clicked') }>Opslaan</Button.Primary>;
export const disabled = () => <Button.Primary onClick={ action('clicked') } disabled>Opslaan</Button.Primary>;
export const destructive = () => <Button.Destructive onClick={ action('clicked') }>Verwijderen</Button.Destructive>;