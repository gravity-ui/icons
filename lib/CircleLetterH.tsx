import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const CircleLetterH = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M7 5.5a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0V8.75h2v1.75a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0v1.75H7z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(CircleLetterH);
export default ForwardRef;
