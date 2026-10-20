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
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth={0.5}
                d="M5 13.75q.932 0 1.591-.659.66-.66.659-1.591v-7q0-.932-.659-1.591-.66-.66-1.591-.659H3q-.932 0-1.591.659-.66.66-.659 1.591v7q0 .932.659 1.591.66.66 1.591.659zm8 0q.932 0 1.591-.659.66-.66.659-1.591v-7q0-.932-.659-1.591-.66-.66-1.591-.659h-2q-.932 0-1.591.659-.66.66-.659 1.591v7q0 .932.659 1.591.66.66 1.591.659zm-10-1q-.518 0-.884-.366a1.2 1.2 0 0 1-.366-.884v-7q0-.518.366-.884T3 3.25h2q.518 0 .884.366t.366.884v7q0 .518-.366.884A1.2 1.2 0 0 1 5 12.75zm8 0q-.518 0-.884-.366a1.2 1.2 0 0 1-.366-.884v-7q0-.518.366-.884T11 3.25h2q.518 0 .884.366t.366.884v7q0 .518-.366.884a1.2 1.2 0 0 1-.884.366z"
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
export default LayoutSplitColumns;
