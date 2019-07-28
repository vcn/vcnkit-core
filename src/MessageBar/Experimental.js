import * as React from 'react';
import styled from 'styled-components';

import * as Button from '../Button';
import { Flask } from '../Icons';

import Message from './Message';

const Experimental = styled(Message)`
    ${ props => `
        background: ${ (props.theme.vcnkit && props.theme.vcnkit.attentionColor) || '#7E57C2' };
        color:      ${ (props.theme.vcnkit && props.theme.vcnkit.invertedSubtleTextColor) || 'hsla(0, 100%, 100%, .87)' };
        
        svg {
            fill: ${ (props.theme.vcnkit && props.theme.vcnkit.invertedIconColor) || '#FFFFFF' };
        }

        ${ Button.Primary } {
            color: ${ (props.theme.vcnkit && props.theme.vcnkit.invertedTextColor) || '#FFFFFF' };
        }
    ` }
`;

export default ({ icon, ...rest }) => (
    <Experimental
        icon={ icon || <Flask /> }
        { ...rest }
    />
);