import * as React from 'react';

export default props => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        { ...props }
    >
        <path
            d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"
        />
    </svg>
);
