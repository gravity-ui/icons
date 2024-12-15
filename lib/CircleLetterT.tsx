import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const CircleLetterT = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6 5a.75.75 0 0 0 0 1.5h1.25v4.25a.75.75 0 0 0 1.5 0V6.5H10A.75.75 0 0 0 10 5z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(CircleLetterT);
export default ForwardRef;
