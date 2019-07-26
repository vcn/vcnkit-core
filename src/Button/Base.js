import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Base = ({ className, onClick, href, disabled, children, type = 'button', ...rest }) => {

    const handleClick = useCallback(
        (event, ...rest) => {
            if (!onClick) {
                return;
            }

            if (disabled) {
                event.preventDefault();
                return;
            }

            onClick(event, ...rest);
        },
        [ disabled, onClick ]
    );

    if (href) {
        return (
            <a
                className={ className }
                onClick={ handleClick }
                href={ href }
                aria-disabled={ disabled || undefined }
                { ...rest }
            >
                { children }
            </a>
        );
    }

    return (
        <button
            className={ className }
            onClick={ handleClick }
            disabled={ disabled }
            type={ type }
            { ...rest }
        >
            { children }
        </button>
    );
};

Base.propTypes = {
    className: PropTypes.string,
    onClick:   PropTypes.func,
    href:      PropTypes.string,
    disabled:  PropTypes.bool,
    type:      PropTypes.oneOf([ 'button', 'submit' ]),
    children:  PropTypes.node.isRequired,
};

export default styled(Base)`
    background: transparent;
    
    display:         flex;
    align-items:     center;
    justify-content: center;

    font-size:       .8125rem;
    font-weight:     500;
    text-decoration: none;
    text-transform:  uppercase;
    white-space:     nowrap;

    padding:       0 .5rem;
    min-width:     4rem;
    min-height:    2rem;
    border:        none;
    border-radius: .125rem;

    ${ props => `
        font-family: ${ (props.theme.vcnkit && props.theme.vcnkit.fontFamily) || 'Roboto, sans-serif' };
        color:       ${ (props.theme.vcnkit && props.theme.vcnkit.textColor) || 'hsla(0, 0%, 0%, .87)' };
    ` }
    
    &::-moz-focus-inner {
        border: none;
    }

    &:focus {
        outline: none;
    }
    
    &:disabled, &[aria-disabled] {
        color:  ${ props => (props.theme.vcnkit && props.theme.vcnkit.disabledColor) || 'hsla(0, 0%, 0%, .12)' };
        cursor: not-allowed;
    }

    &:not(:disabled):not([aria-disabled]) {
        cursor: pointer;

        &:hover, &:focus {
            background: ${ props => (props.theme.vcnkit && props.theme.vcnkit.focusColor) || 'hsla(0, 0%, 0%, .06)' };
        }
    }
`;
