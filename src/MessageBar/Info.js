import * as React from 'react';
import styled from 'styled-components';

import Message from './Message';

const Info = styled(Message)`
    background: ${ props => (props.theme.vcnkit && props.theme.vcnkit.infoColor) || '#D3DFEC' };
`;

export default props => (
    <Info
        { ...props }
    />
);