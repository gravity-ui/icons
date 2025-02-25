import * as React from 'react';
import type {SVGProps} from 'react';
const CircleLetterV = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.441 5.709a.75.75 0 0 0-1.382.582l1.903 4.52a1.126 1.126 0 0 0 2.076 0l1.903-4.52a.75.75 0 1 0-1.382-.582L8 9.411z"
            clipRule="evenodd"
        />
    </svg>
);
export default CircleLetterV;
