import * as React from 'react';
import type {SVGProps} from 'react';
const Shapes4 = (props: SVGProps<SVGSVGElement>) => (
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
                d="M6.193 6 4 2.075 1.807 6zM5.091.953a1.25 1.25 0 0 0-2.182 0L.289 5.64A1.25 1.25 0 0 0 1.38 7.5h5.24a1.25 1.25 0 0 0 1.09-1.86zM2.534 14.929a3.5 3.5 0 1 0 2.932-6.36 3.5 3.5 0 0 0-2.932 6.36M4 13.75a2 2 0 1 0 0-4 2 2 0 0 0 0 4M15.28 1.22a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l5-5a.75.75 0 0 1 1.06 0m-5.03 12.03v-3.5h3.5v3.5zM8.75 9.5c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v4c0 .69-.56 1.25-1.25 1.25h-4c-.69 0-1.25-.56-1.25-1.25z"
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
export default Shapes4;
