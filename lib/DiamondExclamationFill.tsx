import * as React from 'react';
import type {SVGProps} from 'react';
const DiamondExclamationFill = (props: SVGProps<SVGSVGElement>) => (
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
                d="M5.828.98a3 3 0 0 1 4.243 0l4.95 4.949a3 3 0 0 1 0 4.243l-4.95 4.95a3 3 0 0 1-4.243 0l-4.95-4.95a3 3 0 0 1 0-4.243zM7.95 9.55a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-5.25a.75.75 0 0 0-.75.75v2.5a.75.75 0 1 0 1.5 0v-2.5a.75.75 0 0 0-.75-.75"
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
export default DiamondExclamationFill;
