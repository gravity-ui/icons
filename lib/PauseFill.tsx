import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const PauseFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M1.5 3.5a2 2 0 0 1 2-2H5a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3.5a2 2 0 0 1-2-2zm7.5 0a2 2 0 0 1 2-2h1.5a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(PauseFill);
export default ForwardRef;
