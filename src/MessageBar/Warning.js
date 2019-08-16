import * as React from 'react';
import styled from 'styled-components';

import Message from './Message';

const Warning = styled(Message)`
    background: ${ props => (props.theme.vcnkit && props.theme.vcnkit.warningColor) || '#EFE1B3' };
`;

export default props => (
    <Warning
        { ...props }
    />
);