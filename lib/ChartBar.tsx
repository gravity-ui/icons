import * as React from 'react';
import type {SVGProps} from 'react';
const ChartBar = (props: SVGProps<SVGSVGElement>) => (
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
                d="M6 4v1a.5.5 0 0 1-.5.5h-3A.5.5 0 0 1 2 5V4a.5.5 0 0 1 .5-.5h3A.5.5 0 0 1 6 4M2 7.5v1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5M2 11v1a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5m-1.5.503V4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1q0 .26-.063.5H9.5a2 2 0 0 1 2 2v1q0 .26-.063.5H13.5a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2z"
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
export default ChartBar;
