import * as React from 'react';
import type {SVGProps} from 'react';
const ChartAreaStackedNormalized = (props: SVGProps<SVGSVGElement>) => (
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
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth={0.5}
                d="M.75 4v8q0 .725.513 1.237.512.513 1.237.513h11q.725 0 1.237-.513.513-.512.513-1.237V4q0-.725-.513-1.237A1.7 1.7 0 0 0 13.5 2.25h-11q-.725 0-1.237.513A1.7 1.7 0 0 0 .75 4Zm9.972 4.142a1.45 1.45 0 0 1-.95.6 1.45 1.45 0 0 1-1.1-.228L6.92 7.345a2.44 2.44 0 0 0-1.42-.42q-.774.011-1.408.458L2.144 8.757A.24.24 0 0 1 2 8.803a.24.24 0 0 1-.177-.073.24.24 0 0 1-.073-.177V4q0-.31.22-.53a.72.72 0 0 1 .53-.22h11.002a.75.75 0 0 1 .327.075.25.25 0 0 1 .094.371zM2.5 12.75a.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53v-1.611q0-.129.106-.204L4.668 8.2q.38-.268.845-.275.465-.006.852.252l1.753 1.169q.84.56 1.832.38a2.4 2.4 0 0 0 1.583-1l2.264-3.144A.24.24 0 0 1 14 5.478q.25 0 .25.25V12a.72.72 0 0 1-.22.53.72.72 0 0 1-.53.22z"
                clipRule="evenodd"
                style={{
                    strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
                }}
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default ChartAreaStackedNormalized;
