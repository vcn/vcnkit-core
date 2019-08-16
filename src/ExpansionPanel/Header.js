import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { usePanel } from './Panel';
import Icon from './Icon';

const Wrapper = styled.header`
    display:        flex;
    flex-direction: row;
    align-items:    center;
    box-sizing:     content-box;
    padding:        ${ props => props.expanded ? .5 : 0 }rem 1.5rem;
    min-height:     3.25rem;
    transition:     padding 0.2s;
    cursor:         pointer;

    ${ props => `
        font-family: ${ (props.theme.vcnkit && props.theme.vcnkit.fontFamily) || 'Roboto, sans-serif' };
        color:       ${ (props.theme.vcnkit && props.theme.vcnkit.textColor) || 'hsla(0, 0%, 0%, .87)' };
    ` }

    font-size:      .9375rem;
    font-weight:    400;
    line-height:    1.33333333;
    letter-spacing: -0.008em;

    &:focus {
        outline: 0;
    }

    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
        height: 3.25rem;
    }
`;

const ContentContainer = styled.div`
    display:        flex;
    flex-direction: row;
    flex:           1 1 auto;
`;

const IconContainer = styled.div`
    padding-left: 1.5rem;
`;

const Header = ({ children, icon, ...rest }) => {
    const { expanded, toggle } = usePanel();

    const handleKeyPress = event => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggle();
        }
    };

    return (
        <Wrapper
            { ...rest }
            expanded={ expanded }
            role="button"
            aria-expanded={ expanded }
            onClick={ toggle }
            onKeyPress={ handleKeyPress }
        >
            <ContentContainer>{ children }</ContentContainer>
            <IconContainer>{ icon ? icon : <Icon /> }</IconContainer>
        </Wrapper> 
    );
};

Header.propTypes = {
    icon:     PropTypes.node,
    children: PropTypes.node.isRequired,
};

export default Header;
