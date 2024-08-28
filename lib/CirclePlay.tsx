import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const CirclePlay = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-7.75 3.031L11 8.866a1 1 0 0 0 0-1.732L7.25 4.969a1 1 0 0 0-1.5.866v4.33a1 1 0 0 0 1.5.866"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(CirclePlay);
export default ForwardRef;
