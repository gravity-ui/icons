import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const Dots9 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M9.5 3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M3 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M13 4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M4.5 3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M8 14.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m6.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M3 14.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(Dots9);
export default ForwardRef;
