import * as React from 'react';
import type {SVGProps} from 'react';
const LayoutSplitColumns = (props: SVGProps<SVGSVGElement>) => (
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
                d="M5 12.5H3a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1M3 14h2a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 5 2H3A2.5 2.5 0 0 0 .5 4.5v7A2.5 2.5 0 0 0 3 14m10-1.5h-2a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1M11 14h2a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 13 2h-2a2.5 2.5 0 0 0-2.5 2.5v7A2.5 2.5 0 0 0 11 14"
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
export default LayoutSplitColumns;
