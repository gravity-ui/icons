import * as React from 'react';
import type {SVGProps} from 'react';
const Gpu = (props: SVGProps<SVGSVGElement>) => (
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
                d="M.75.75a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354q0 .207.146.354a.48.48 0 0 0 .354.146h.5q.414 0 .707.293a.96.96 0 0 1 .293.707v11.5q0 .207.146.354a.48.48 0 0 0 .354.146.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354V13q0-.25.25-.25H13a2.65 2.65 0 0 0 1.945-.805A2.65 2.65 0 0 0 15.75 10V6a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 13 3.25H3.5q-.25 0-.25-.25v-.25q0-.829-.586-1.414A1.93 1.93 0 0 0 1.25.75zm2.75 3.5H13q.725 0 1.237.513.513.512.513 1.237v4q0 .725-.513 1.237A1.7 1.7 0 0 1 13 11.75H3.5q-.25 0-.25-.25v-7q0-.25.25-.25Zm4 6q.932 0 1.591-.659.66-.66.659-1.591 0-.932-.659-1.591-.66-.66-1.591-.659-.932 0-1.591.659-.66.66-.659 1.591 0 .932.659 1.591.66.66 1.591.659Zm0-1q-.518 0-.884-.366A1.2 1.2 0 0 1 6.25 8q0-.518.366-.884T7.5 6.75t.884.366T8.75 8t-.366.884a1.2 1.2 0 0 1-.884.366Z"
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
export default Gpu;
