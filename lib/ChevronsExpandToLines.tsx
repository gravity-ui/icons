import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const ChevronsExpandToLines = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M1.5 2.75a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0zm14.5 0a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0zM6.53 4.97a.75.75 0 0 1 0 1.06L4.56 8l1.97 1.97a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0m2.94 1.06a.75.75 0 0 1 1.06-1.06l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06L11.44 8z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(ChevronsExpandToLines);
export default ForwardRef;
