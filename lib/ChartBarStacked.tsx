import * as React from 'react';
import type {SVGProps} from 'react';
const ChartBarStacked = (props: SVGProps<SVGSVGElement>) => (
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
                d="M14 12a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 2 12v-1a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5zm0-3.5a.5.5 0 0 1-.5.5H12a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 12 7h1.5a.5.5 0 0 1 .5.5zM14 5V4a.5.5 0 0 0-.5-.5H8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h5.5A.5.5 0 0 0 14 5M2.5 3.5A.5.5 0 0 0 2 4v1a.5.5 0 0 0 .5.5h3A.5.5 0 0 0 6 5V4a.5.5 0 0 0-.5-.5zm-.5 4v1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5M.5 12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-11a2 2 0 0 0-2 2z"
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
export default ChartBarStacked;
