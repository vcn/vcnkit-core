import * as React from 'react';

export default props => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        { ...props }
    >
        <path
            d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
        />
        <path
            d="M0 0h24v24H0z"
            fill="none"
        />
    </svg>
);
