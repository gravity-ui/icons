import * as React from 'react';
import type {SVGProps} from 'react';
const SquareLineHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
                d="M.25 8q0 .207.146.354A.48.48 0 0 0 .75 8.5h.75q.25 0 .25.25v2.75q0 1.14.805 1.945a2.65 2.65 0 0 0 1.945.805h7a2.65 2.65 0 0 0 1.945-.805 2.65 2.65 0 0 0 .805-1.945V8.75q0-.25.25-.25h.75a.48.48 0 0 0 .354-.146A.48.48 0 0 0 15.75 8a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146h-.75a.24.24 0 0 1-.177-.073.24.24 0 0 1-.073-.177V4.5a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 11.5 1.75h-7a2.65 2.65 0 0 0-1.945.805A2.65 2.65 0 0 0 1.75 4.5v2.75q0 .25-.25.25H.75a.48.48 0 0 0-.354.146A.48.48 0 0 0 .25 8ZM3 7.5q-.25 0-.25-.25V4.5q0-.725.513-1.237A1.7 1.7 0 0 1 4.5 2.75h7q.725 0 1.237.513.513.512.513 1.237v2.75q0 .25-.25.25zm-.25 4V8.75q0-.25.25-.25h10q.25 0 .25.25v2.75q0 .725-.513 1.237a1.7 1.7 0 0 1-1.237.513h-7q-.725 0-1.237-.513A1.7 1.7 0 0 1 2.75 11.5Z"
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
export default SquareLineHorizontal;
