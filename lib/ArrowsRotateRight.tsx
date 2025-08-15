import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const ArrowsRotateRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M8 1.5a6.5 6.5 0 0 0-6.445 5.649.75.75 0 1 0 1.488.194A5.001 5.001 0 0 1 11.57 4.5h-1.32a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-1.5 0v1.06A6.48 6.48 0 0 0 8 1.5m-5.25 13a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H4.43a5.001 5.001 0 0 0 8.528-2.843.75.75 0 1 1 1.487.194A6.501 6.501 0 0 1 3.5 12.691v1.059a.75.75 0 0 1-.75.75"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(ArrowsRotateRight);
export default ForwardRef;
