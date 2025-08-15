import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const CirclePlayFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m-.75 3.969a1 1 0 0 0-1.5.866v4.33a1 1 0 0 0 1.5.866L11 8.866a1 1 0 0 0 0-1.732z"
        />
    </svg>
);
const ForwardRef = forwardRef(CirclePlayFill);
export default ForwardRef;
