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
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth={0.5}
                d="M1.263 13.237q.512.513 1.237.513h11q.725 0 1.237-.513.513-.512.513-1.237V4q0-.725-.513-1.237A1.7 1.7 0 0 0 13.5 2.25h-11q-.725 0-1.237.513A1.7 1.7 0 0 0 .75 4v8q0 .725.513 1.237ZM1.75 4q0-.31.22-.53a.72.72 0 0 1 .53-.22h3q.31 0 .53.22t.22.53v1a.72.72 0 0 1-.22.53.72.72 0 0 1-.53.22h-3a.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53zm12.5 0v1a.72.72 0 0 1-.22.53.72.72 0 0 1-.53.22H8a.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53V4q0-.31.22-.53A.72.72 0 0 1 8 3.25h5.5q.31 0 .53.22t.22.53ZM1.75 8.5v-1q0-.31.22-.53a.72.72 0 0 1 .53-.22h7q.31 0 .53.22t.22.53v1a.72.72 0 0 1-.22.53.72.72 0 0 1-.53.22h-7a.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53Zm11.75.75H12a.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53v-1q0-.31.22-.53a.72.72 0 0 1 .53-.22h1.5q.31 0 .53.22t.22.53v1a.72.72 0 0 1-.22.53.72.72 0 0 1-.53.22Zm-11 3.5a.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53v-1q0-.31.22-.53a.72.72 0 0 1 .53-.22h11q.31 0 .53.22t.22.53v1a.72.72 0 0 1-.22.53.72.72 0 0 1-.53.22z"
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
export default ChartBarStacked;
