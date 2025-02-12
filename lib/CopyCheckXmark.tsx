import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const CopyCheckXmark = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M4 6.5A1.5 1.5 0 0 0 2.5 8v4A1.5 1.5 0 0 0 4 13.5h4A1.5 1.5 0 0 0 9.5 12V8A1.5 1.5 0 0 0 8 6.5zm6-1.56.97-.97a.75.75 0 0 1 1.06 1.06l-.97.97.97.97A.75.75 0 0 1 11 8.059V9.5h1A1.5 1.5 0 0 0 13.5 8V4c0-.414-.168-.79-.44-1.06A1.5 1.5 0 0 0 12 2.5H8a1.495 1.495 0 0 0-1.415 1A1.5 1.5 0 0 0 6.5 4v1h1.441A.75.75 0 0 1 8 3.941a.75.75 0 0 1 1.03.028zM8 9.075l.085-.107zm0 0-1.39 1.738-.002.001-.522.654a.75.75 0 0 1-1.116.061l-1-1a.75.75 0 0 1 1.06-1.06l.408.407 1.476-1.845L6.94 8a.75.75 0 0 1 1.144.97M15 8a3 3 0 0 1-3 3h-1v1a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h1V4a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(CopyCheckXmark);
export default ForwardRef;
