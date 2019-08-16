import * as React from 'react';

export default props => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        { ...props }
    >
        <path
            d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"
        />
        <path
            fill="none"
            d="M0 0h24v24H0z"
        />
    </svg>
);
