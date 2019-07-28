import * as React from 'react';
import styled from 'styled-components';

import * as Button from '../Button';

import Message from './Message';

const Error = styled(Message)`
    ${ props => `
        background: ${ (props.theme.vcnkit && props.theme.vcnkit.attentionColor) || '#C26565' };
        color:      ${ (props.theme.vcnkit && props.theme.vcnkit.invertedSubtleTextColor) || 'hsla(0, 100%, 100%, .87)' };
        
        svg {
            fill: ${ (props.theme.vcnkit && props.theme.vcnkit.invertedIconColor) || '#FFFFFF' };
        }

        ${ Button.Primary } {
            color: ${ (props.theme.vcnkit && props.theme.vcnkit.invertedTextColor) || '#FFFFFF' };
        }
    ` }
`;

export default props => (
    <Error
        { ...props }
    />
);