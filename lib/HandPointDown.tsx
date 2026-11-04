import * as React from 'react';
import type {SVGProps} from 'react';
const HandPointDown = (props: SVGProps<SVGSVGElement>) => (
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
                d="M13.735 1.284a.48.48 0 0 0-.118-.36.48.48 0 0 0-.337-.173L6.286.25a.5.5 0 0 0-.374.117.48.48 0 0 0-.174.346q-.015.21.124.366a.48.48 0 0 0 .347.168l7.007.5a.48.48 0 0 0 .351-.124.48.48 0 0 0 .168-.34Zm-.43 1.954-7.227-.482-.015.011-3.646 2.836a1.68 1.68 0 0 0-.622.973q-.14.597.13 1.147.267.55.822.81.555.259 1.15.11l1.042-.26A.3.3 0 0 1 5 8.374q.25 0 .25.25v5.433q0 .648.432 1.13.431.482 1.076.553.643.07 1.17-.307t.666-1.01l.662-2.978a.23.23 0 0 1 .203-.193l2.744-.457q1.2-.2 1.86-1.222.66-1.024.345-2.2zM12.57 4.36l.872 3.272q.2.747-.22 1.399-.42.65-1.184.778l-2.744.457-.83.139-.184.822-.662 2.98a.67.67 0 0 1-.272.414.67.67 0 0 1-.48.126.67.67 0 0 1-.44-.227.67.67 0 0 1-.176-.465V7.024l-1.553.389-1.042.26a.7.7 0 0 1-.484-.047.7.7 0 0 1-.346-.34.7.7 0 0 1-.055-.483.7.7 0 0 1 .26-.41l3.287-2.555a.24.24 0 0 1 .17-.052l5.858.39a.23.23 0 0 1 .225.185Z"
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
export default HandPointDown;
