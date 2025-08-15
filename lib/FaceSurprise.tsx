import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const FaceSurprise = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-5.75-.75a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-1.5 0zM6 8a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 1.5 0v1A.75.75 0 0 1 6 8m2 4c1.37 0 2.5-.5 2.5-1.5S9.5 9 8 9s-2.5.5-2.5 1.5S6.5 12 8 12"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(FaceSurprise);
export default ForwardRef;
