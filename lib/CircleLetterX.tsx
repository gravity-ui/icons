import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const CircleLetterX = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M5.658 9.79a.75.75 0 0 0 1.184.92L8 9.223l1.158 1.489a.75.75 0 0 0 1.184-.921L8.95 8l1.392-1.79a.75.75 0 0 0-1.184-.92L8 6.778 6.842 5.29a.75.75 0 1 0-1.184.92L7.05 8z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(CircleLetterX);
export default ForwardRef;
