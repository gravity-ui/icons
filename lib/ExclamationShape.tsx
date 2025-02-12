import * as React from 'react';
import type {SVGProps} from 'react';
const ExclamationShape = (props: SVGProps<SVGSVGElement>) => (
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
                d="m9.41 1.762-.325 6.5a.25.25 0 0 1-.25.238h-1.67a.25.25 0 0 1-.25-.238l-.325-6.5a.25.25 0 0 1 .25-.262h2.32a.25.25 0 0 1 .25.262m1.173 6.575.325-6.5A1.75 1.75 0 0 0 9.16 0H6.84a1.75 1.75 0 0 0-1.748 1.837l.325 6.5A1.75 1.75 0 0 0 7.165 10h1.67a1.75 1.75 0 0 0 1.748-1.663M8 12.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m2.5 1a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0"
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
export default ExclamationShape;
