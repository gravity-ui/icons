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
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth={0.5}
                d="M10.658 1.825a1.44 1.44 0 0 0-.411-1.109A1.44 1.44 0 0 0 9.16.25H6.84q-.643 0-1.087.466-.443.465-.411 1.109l.325 6.5q.03.598.464 1.012.435.413 1.034.413h1.67q.6 0 1.034-.413.434-.414.464-1.012zM9.335 8.274a.48.48 0 0 1-.155.338.48.48 0 0 1-.345.138h-1.67a.48.48 0 0 1-.345-.138.48.48 0 0 1-.155-.338l-.325-6.5a.48.48 0 0 1 .138-.37.48.48 0 0 1 .362-.154h2.32a.48.48 0 0 1 .362.155.48.48 0 0 1 .138.37zm.256 3.635q-.66-.66-1.591-.659-.932 0-1.591.659-.66.66-.659 1.591 0 .932.659 1.591.66.66 1.591.659.932 0 1.591-.659.66-.66.659-1.591 0-.932-.659-1.591ZM9.25 13.5q0 .518-.366.884A1.2 1.2 0 0 1 8 14.75q-.518 0-.884-.366a1.2 1.2 0 0 1-.366-.884q0-.518.366-.884T8 12.25t.884.366.366.884Z"
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
export default ExclamationShape;
