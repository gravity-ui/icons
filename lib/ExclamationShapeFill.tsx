import * as React from 'react';
import type {SVGProps} from 'react';
const ExclamationShapeFill = (props: SVGProps<SVGSVGElement>) => (
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
                d="m10.921 1.575-.35 7A1.5 1.5 0 0 1 9.073 10H6.927a1.5 1.5 0 0 1-1.498-1.425l-.35-7A1.5 1.5 0 0 1 6.577 0h2.846a1.5 1.5 0 0 1 1.498 1.575M8 11a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5"
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
export default ExclamationShapeFill;
