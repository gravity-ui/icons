import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const CodeFork = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M3.504 5.897a2.751 2.751 0 1 1 1.503-.002A1.5 1.5 0 0 0 6.5 7.25h3a1.5 1.5 0 0 0 1.493-1.355 2.751 2.751 0 1 1 1.503.002A3 3 0 0 1 9.5 8.75h-.75v1.354a2.751 2.751 0 1 1-1.5 0V8.75H6.5a3 3 0 0 1-2.996-2.853M3 3.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0m3.75 9.5a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0m3.75-9.5a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(CodeFork);
export default ForwardRef;
