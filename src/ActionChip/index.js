import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ActionChip = ({ onClick, disabled, loading, children, icon, ...rest }) => {

    const handleClick = event => {
        if (disabled || loading) {
            event.preventDefault();
            return;
        }

        onClick(event);
    };

    return (
        <button
            onClick={ handleClick }
            disabled={ disabled || loading }
            type="button"
            { ...rest }
        >
            { icon }
            <div>{ children }</div>
        </button>
    );
};

ActionChip.propTypes = {
    icon:      PropTypes.node,
    disabled:  PropTypes.bool,
    loading:   PropTypes.bool,
    className: PropTypes.string,
    onClick:   PropTypes.func.isRequired,
    children:  PropTypes.node.isRequired,
}

export default styled(ActionChip)`
    display:        inline-flex;
    flex-direction: row;
    align-items:    center;

    height:  1.75rem;
    padding: 0 .75rem 0 .5rem;

    border:        none;
    border-radius: .875rem;

    ${ props => `
        font-family: ${ (props.theme.vcnkit && props.theme.vcnkit.fontFamily) || 'Roboto, sans-serif' };
        color:       ${ (props.theme.vcnkit && props.theme.vcnkit.textColor) || 'hsla(0, 0%, 0%, .87)' };        
    ` }

    font-weight: 400;
    font-size:   .75rem;

    &:disabled {
        background: #FAFAFA;
        color:      ${ props => (props.theme.vcnkit && props.theme.vcnkit.disabledColor) || 'hsla(0, 0%, 0%, .12)' };
        cursor:     not-allowed;

        & > svg {
            fill: ${ props => (props.theme.vcnkit && props.theme.vcnkit.disabledIconColor) || 'hsla(0, 0%, 0%, .17)' };
        }
    }

    &:not(:disabled) {
        cursor: pointer;

        &:hover, &:focus {
            background: #E0E0E0;
        }
    }

    &::-moz-focus-inner {
        border: none;
    }

    &:focus {
        outline: none;
    }

    & > svg {
        width:  1rem;
        height: 1rem;

        fill: ${ props => (props.theme.vcnkit && props.theme.vcnkit.iconColor) || 'hsla(0, 0%, 0%, .54)' };
    }

    & > div {
        margin: 0 0 0 .25rem;
    }
`;