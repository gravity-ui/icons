import * as React from 'react';
import type {SVGProps} from 'react';
const BriefcaseFill = (props: SVGProps<SVGSVGElement>) => (
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
            d="M9 1a2 2 0 0 1 2 2v1h1a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1V3a2 2 0 0 1 2-2zM4.75 7a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zM7 2.5a.5.5 0 0 0-.5.5v1h3V3a.5.5 0 0 0-.5-.5z"
            clipRule="evenodd"
        />
    </svg>
);
export default BriefcaseFill;
