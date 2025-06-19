import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const ArrowUturnCcwDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M4.72 13.53a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06L6 11.19V7a3.25 3.25 0 0 1 6.5 0v1A.75.75 0 0 0 14 8V7a4.75 4.75 0 1 0-9.5 0v4.19L2.78 9.47a.75.75 0 0 0-1.06 1.06z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(ArrowUturnCcwDown);
export default ForwardRef;
