import * as React from 'react';

export default props => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        { ...props }
    >
        <path
            d="M0 0h24v24H0z"
            fill="none"/>
        <path
            d="M7 2v11h3v9l7-12h-4l4-8z"
        />
    </svg>
);
