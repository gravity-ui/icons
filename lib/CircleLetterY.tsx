import * as React from 'react';
import type {SVGProps} from 'react';
const CircleLetterY = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.586 5.281a.75.75 0 1 0-1.172.938L7.25 8.513v2.237a.75.75 0 0 0 1.5 0V8.513l1.836-2.294a.75.75 0 0 0-1.172-.938L8 7.05z"
            clipRule="evenodd"
        />
    </svg>
);
export default CircleLetterY;
