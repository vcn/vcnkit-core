import React from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';

import { usePanel } from './Panel';

const AnimatedContainer = posed.div({
    open:   { height: 'auto', flip: true },
    closed: { height: '1px', flip: true },
});

const Content = ({ children }) => {
    const { expanded } = usePanel();

    return (
        <AnimatedContainer
            pose={ expanded ? 'open' : 'closed' }
        >
            { expanded && children }
        </AnimatedContainer>
    );
};

Content.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Content;