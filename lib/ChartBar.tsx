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
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth={0.5}
                d="M.75 4v8q0 .725.513 1.237.512.513 1.237.513h11q.725 0 1.237-.513.513-.512.513-1.237v-1q0-.725-.513-1.237A1.7 1.7 0 0 0 13.5 9.25h-2.063q-.25 0-.25-.25 0-.033.008-.063.055-.21.055-.437v-1q0-.725-.513-1.237A1.7 1.7 0 0 0 9.5 5.75H7.437a.24.24 0 0 1-.177-.073.25.25 0 0 1-.065-.24q.055-.21.055-.437V4q0-.725-.513-1.237A1.7 1.7 0 0 0 5.5 2.25h-3q-.725 0-1.237.513A1.7 1.7 0 0 0 .75 4Zm5.5 1a.72.72 0 0 1-.22.53.72.72 0 0 1-.53.22h-3a.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53V4q0-.31.22-.53a.72.72 0 0 1 .53-.22h3q.31 0 .53.22t.22.53zm-4.5 3.5v-1q0-.31.22-.53a.72.72 0 0 1 .53-.22h7q.31 0 .53.22t.22.53v1a.72.72 0 0 1-.22.53.72.72 0 0 1-.53.22h-7a.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53Zm0 3.5v-1q0-.31.22-.53a.72.72 0 0 1 .53-.22h11q.31 0 .53.22t.22.53v1a.72.72 0 0 1-.22.53.72.72 0 0 1-.53.22h-11a.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53Z"
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
export default ChartBar;
