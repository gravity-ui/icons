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
                d="M.75 7.25a.75.75 0 0 0 0 1.5h.75v2.75a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3V8.75h.75a.75.75 0 0 0 0-1.5h-.75V4.5a3 3 0 0 0-3-3h-7a3 3 0 0 0-3 3v2.75zM3 8.75v2.75A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5V8.75zm10-1.5H3V4.5A1.5 1.5 0 0 1 4.5 3h7A1.5 1.5 0 0 1 13 4.5z"
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
export default SquareLineHorizontal;
