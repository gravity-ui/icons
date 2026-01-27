import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const Equal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M13.5 11a.75.75 0 0 0 0-1.5h-11a.75.75 0 0 0 0 1.5zm0-4.5a.75.75 0 0 0 0-1.5h-11a.75.75 0 0 0 0 1.5z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(Equal);
export default ForwardRef;
