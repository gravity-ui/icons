import * as React from 'react';
import {SVGProps} from 'react';
const VectorCircle = (props: SVGProps<SVGSVGElement>) => (
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
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M.75 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM6 13.25a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM11.25 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM6 2.75a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
            />
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M10 12.032A4.52 4.52 0 0 0 12.032 10h1.627A6.017 6.017 0 0 1 10 13.659v-1.627ZM3.968 10A4.519 4.519 0 0 0 6 12.032v1.627A6.017 6.017 0 0 1 2.341 10h1.627ZM6 3.968A4.52 4.52 0 0 0 3.968 6H2.34A6.017 6.017 0 0 1 6 2.341v1.627Zm4 0A4.52 4.52 0 0 1 12.032 6h1.627A6.017 6.017 0 0 0 10 2.341v1.627Z"
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
export default VectorCircle;
