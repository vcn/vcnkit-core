import * as React from 'react';
import styled from 'styled-components';

import { KeyboardArrowDown } from '../Icons';
import { usePanel } from './Panel';

const StyledKeyboardArrowDown = styled(({ expanded, ...rest}) => <KeyboardArrowDown { ...rest } />)`
    transition: .2s ease-in-out;
    transform:  rotate(${ props => props.expanded ? -180 : 0 }deg);
    height:     1.5rem;
    width:      1.5rem;
    fill:       ${ props => (props.theme.vcnkit && props.theme.vcnkit.iconColor) || 'hsla(0, 0%, 0%, .57)' };
    display:    block;
`;

const Icon = () => {
    const { expanded } = usePanel();

    return (
        <StyledKeyboardArrowDown
            expanded={ expanded }
        />
    );
};

export default Icon;