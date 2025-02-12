import * as React from 'react';
import type {SVGProps} from 'react';
const CircleLetterZ = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6 5a.75.75 0 0 0 0 1.5h2.49L5.56 9.284A.995.995 0 0 0 6.245 11H10a.75.75 0 0 0 0-1.5H7.51l2.93-2.784A.995.995 0 0 0 9.755 5z"
            clipRule="evenodd"
        />
    </svg>
);
export default CircleLetterZ;
