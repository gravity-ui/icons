import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const Timestamps = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M14.5 12.75a2.75 2.75 0 0 0-2-2.646V8.75h2.25a.75.75 0 0 0 0-1.5h-6V5.896a2.75 2.75 0 0 0 2-2.646 2.75 2.75 0 1 0-3.5 2.646V7.25h-6a.75.75 0 0 0 0 1.5H3.5v1.354a2.75 2.75 0 0 0-2 2.646A2.75 2.75 0 1 0 5 10.104V8.75h6v1.354a2.751 2.751 0 1 0 3.5 2.646M11.75 14a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M8 4.5A1.25 1.25 0 1 0 8 2a1.25 1.25 0 0 0 0 2.5M4.25 14a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(Timestamps);
export default ForwardRef;
