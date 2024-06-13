import * as React from 'react';
import type {SVGProps} from 'react';
const Layers3Diagonal = (props: SVGProps<SVGSVGElement>) => (
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
                d="M6.702 3.013 8 3.5V2.386A2 2 0 0 1 10.702.513l3.351 1.257A3 3 0 0 1 16 4.579v4.035a2 2 0 0 1-2.702 1.873L12 10v1.114a2 2 0 0 1-2.702 1.873L8 12.5v1.114a2 2 0 0 1-2.702 1.873L1.947 14.23A3 3 0 0 1 0 11.421V7.386a2 2 0 0 1 2.702-1.873L4 6V4.886a2 2 0 0 1 2.702-1.873M5.5 6.563l.553.207A3 3 0 0 1 8 9.579v1.319l1.824.684a.5.5 0 0 0 .676-.468V7.079a1.5 1.5 0 0 0-.973-1.405L6.176 4.418a.5.5 0 0 0-.676.468zm4.553-2.293L9.5 4.062V2.386a.5.5 0 0 1 .676-.468l3.35 1.256c.586.22.974.78.974 1.405v4.035a.5.5 0 0 1-.676.468L12 8.398V7.079a3 3 0 0 0-1.947-2.809M1.5 11.421V7.386a.5.5 0 0 1 .676-.468l3.35 1.257c.586.219.974.779.974 1.404v4.035a.5.5 0 0 1-.676.468l-3.35-1.257a1.5 1.5 0 0 1-.974-1.404"
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
export default Layers3Diagonal;
