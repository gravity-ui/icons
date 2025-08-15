import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const Percent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M4.5 7.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6m1.5-3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5.5 10a3 3 0 1 1 0-6 3 3 0 1 1 0 6m1.5-3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.78-8.22a.75.75 0 0 0-1.06-1.06l-10.5 10.5a.75.75 0 1 0 1.06 1.06z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(Percent);
export default ForwardRef;
