import * as React from 'react';
import type {SVGProps} from 'react';
const LayoutSplitSideContentRight = (props: SVGProps<SVGSVGElement>) => (
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
                d="M3 13.75h4.5q.932 0 1.591-.659.66-.66.659-1.591v-7q0-.932-.659-1.591-.66-.66-1.591-.659H3q-.932 0-1.591.659-.66.66-.659 1.591v7q0 .932.659 1.591.66.66 1.591.659Zm10 0h.5q.725 0 1.237-.513.513-.512.513-1.237V4q0-.725-.513-1.237A1.7 1.7 0 0 0 13.5 2.25H13q-.725 0-1.237.513A1.7 1.7 0 0 0 11.25 4v8q0 .725.513 1.237.512.513 1.237.513Zm-5.5-1H3q-.518 0-.884-.366a1.2 1.2 0 0 1-.366-.884v-7q0-.518.366-.884T3 3.25h4.5q.518 0 .884.366t.366.884v7q0 .518-.366.884a1.2 1.2 0 0 1-.884.366Zm6 0H13a.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53V4q0-.31.22-.53a.72.72 0 0 1 .53-.22h.5q.31 0 .53.22t.22.53v8a.72.72 0 0 1-.22.53.72.72 0 0 1-.53.22Z"
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
export default LayoutSplitSideContentRight;
