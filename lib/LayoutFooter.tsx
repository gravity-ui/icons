import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const LayoutFooter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M4 12.5h8a1.5 1.5 0 0 0 1.5-1.5v-.5h-11v.5A1.5 1.5 0 0 0 4 12.5M2.5 9V5A1.5 1.5 0 0 1 4 3.5h8A1.5 1.5 0 0 1 13.5 5v4zM1 11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(LayoutFooter);
export default ForwardRef;
