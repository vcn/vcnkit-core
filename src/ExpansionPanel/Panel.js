import React, { useState, useContext, createContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getShadow } from '../util';

const Context = createContext({});

const isUndefinedOrNull = value => typeof value === 'undefined' || value === null;

const Wrapper = styled.div`
    ${ props => props.expanded ? `
        border-radius: .125rem;
        margin:        1rem 0;
    ` : `
        border-radius: 0;
        margin:        0;
    ` }

    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1);

    box-shadow: ${ getShadow(1) };
    background: ${ props => (props.theme.vcnkit && props.theme.vcnkit.paperBackgroundColor) || '#FFFFFF' };

    &:first-of-type {
        margin-top:    0;
        border-radius: .125rem .125rem 0 0;
    }

    &:last-of-type {
        border-radius: 0 0 .125rem .125rem;
    }

    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
        border-bottom: .0625rem solid #EFEFEF;
    }
`;

const Panel = ({ className, children, expanded, initialExpanded = false, onChange }) => {
    const [ localExpanded, setLocalExpanded ] = useState(initialExpanded);

    const handleChange = () => {
        if (onChange) {
            onChange(expanded);
            return;
        }

        setLocalExpanded(!localExpanded);
    };

    const isExpanded = isUndefinedOrNull(expanded) ? localExpanded : expanded;

    return (
        <Context.Provider
            value={ {
                expanded: isExpanded,
                toggle:   handleChange,
            } }
        >
            <Wrapper
                className={ className }
                expanded={ isExpanded }
            >
                { children }
            </Wrapper>
        </Context.Provider>
    );
};

Panel.propTypes = {
    initialExpanded: PropTypes.bool,
    expanded:        PropTypes.bool,
    className:       PropTypes.string,
    children:        PropTypes.node,
};

const usePanel = () => useContext(Context);

export {
    Panel as default,
    usePanel,
}