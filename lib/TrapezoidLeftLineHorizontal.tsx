import * as React from 'react';
import type {SVGProps} from 'react';
const TrapezoidLeftLineHorizontal = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M.75 7.25a.75.75 0 0 0 0 1.5H2v2.234a2.5 2.5 0 0 0 1.97 2.443l7 1.517A2.5 2.5 0 0 0 14 12.5V8.75h1.25a.75.75 0 0 0 0-1.5H14V3.5a2.5 2.5 0 0 0-3.03-2.444l-7 1.517A2.5 2.5 0 0 0 2 5.016V7.25zm2.75 1.5v2.234a1 1 0 0 0 .788.977l7 1.517A1 1 0 0 0 12.5 12.5V8.75zm9-1.5h-9V5.016a1 1 0 0 1 .788-.977l7-1.517A1 1 0 0 1 12.5 3.5z"
                clipRule="evenodd"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default TrapezoidLeftLineHorizontal;
