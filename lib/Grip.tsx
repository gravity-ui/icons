import * as React from 'react';
import type {SVGProps} from 'react';
const Grip = (props: SVGProps<SVGSVGElement>) => (
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
            d="M7 3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M5.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0-5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M7 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
            clipRule="evenodd"
        />
    </svg>
);
export default Grip;
