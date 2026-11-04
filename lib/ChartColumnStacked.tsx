import * as React from 'react';
import type {SVGProps} from 'react';
const ChartColumnStacked = (props: SVGProps<SVGSVGElement>) => (
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
                d="M2.5 2.25q-.725 0-1.237.513A1.7 1.7 0 0 0 .75 4v8q0 .725.513 1.237.512.513 1.237.513h11q.725 0 1.237-.513.513-.512.513-1.237V4q0-.725-.513-1.237A1.7 1.7 0 0 0 13.5 2.25zM1.75 4q0-.31.22-.53a.72.72 0 0 1 .53-.22h2q.31 0 .53.22t.22.53v3.5a.72.72 0 0 1-.22.53.72.72 0 0 1-.53.22h-2a.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53zM9 3.25q.31 0 .53.22t.22.53v.5a.72.72 0 0 1-.22.53.72.72 0 0 1-.53.22H7a.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53V4q0-.31.22-.53A.72.72 0 0 1 7 3.25zm2.5 0h2q.31 0 .53.22t.22.53v8a.72.72 0 0 1-.22.53.72.72 0 0 1-.53.22h-2a.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53V4q0-.31.22-.53a.72.72 0 0 1 .53-.22ZM9.75 12a.72.72 0 0 1-.22.53.72.72 0 0 1-.53.22H7a.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53V7q0-.31.22-.53A.72.72 0 0 1 7 6.25h2q.31 0 .53.22t.22.53zm-4.5 0a.72.72 0 0 1-.22.53.72.72 0 0 1-.53.22h-2a.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53v-2q0-.31.22-.53a.72.72 0 0 1 .53-.22h2q.31 0 .53.22t.22.53z"
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
export default ChartColumnStacked;
