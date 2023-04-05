import * as React from 'react';
import {SVGProps} from 'react';
const NodesUp = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M2.5 5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM4 2a3 3 0 1 0 .79 5.895L5.908 9.85a3 3 0 1 0 4.185 0l1.117-1.955A3.003 3.003 0 0 0 15 5a3 3 0 1 0-5.092 2.15L8.79 9.105a3.003 3.003 0 0 0-1.58 0L6.092 7.15A3 3 0 0 0 4 2Zm6.5 3a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM8 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            clipRule="evenodd"
        />
    </svg>
);
export default NodesUp;
