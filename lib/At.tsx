import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const At = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M1.18 6.423A7 7 0 1 1 14.808 9.62a2.499 2.499 0 0 1-4.403.92 3.5 3.5 0 1 1 1.005-1.753 1 1 0 0 0 1.949.452l.056-.277a5.5 5.5 0 1 0-2.938 3.949.75.75 0 0 1 .677 1.339A7 7 0 0 1 1.18 6.423m7.27-.371a2 2 0 1 0-.9 3.897 2 2 0 0 0 .9-3.897"
        />
    </svg>
);
const ForwardRef = forwardRef(At);
export default ForwardRef;
