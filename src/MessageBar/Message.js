import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Info } from '../Icons';

const ActionBar = styled.div`
    margin: 0 -.5rem 0 auto;
`;

const Message = ({ children, icon, actions, className, ...rest }) => (
    <div
        className={ className }
        { ...rest }
    >
        { icon || <Info /> }
        <div>
            { children }
        </div>
        { actions && (
            <ActionBar>
                { actions }
            </ActionBar>
        ) }
    </div>
);

Message.propTypes = {
    className: PropTypes.string,
    icon:      PropTypes.node,
    actions:   PropTypes.node,
    children:  PropTypes.node.isRequired,
};

export default styled(Message)`
    display:        flex;
    flex-direction: row;
    align-items:    center;

    font-size: .8125rem;

    padding:       .625rem 1.5rem;
    border-radius: .125rem;
    min-height:    2rem;

    background: hsla(0, 0%, 0%, .03);

    svg {
        width:  1.5rem;
        height: 1.5rem;
        margin: 0 1rem 0 0;
        flex:   0 0 1.5rem;
    }

    ${ props => `
        font-family: ${ (props.theme.vcnkit && props.theme.vcnkit.fontFamily) || '"Roboto", sans-serif' };
        color:       ${ (props.theme.vcnkit && props.theme.vcnkit.subtleTextColor) || 'hsla(0, 0%, 0%, .67)' };

        svg {
            fill: ${ (props.theme.vcnkit && props.theme.vcnkit.iconColor) || 'hsla(0, 0%, 0%, .57)' };
        }
    ` }
`;