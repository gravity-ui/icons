import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const CopyArrowRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M8 2.5h4A1.5 1.5 0 0 1 13.5 4v4A1.5 1.5 0 0 1 12 9.5h-1V8a3 3 0 0 0-3-3H6.5V4A1.5 1.5 0 0 1 8 2.5m4 8.5h-1v1a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h1V4a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3M8 6.5H4A1.5 1.5 0 0 0 2.5 8v4A1.5 1.5 0 0 0 4 13.5h4A1.5 1.5 0 0 0 9.5 12V8A1.5 1.5 0 0 0 8 6.5m-1.47 6.03a.75.75 0 0 1-1.06-1.06l.72-.72H4a.75.75 0 0 1 0-1.5h2.19l-.72-.72a.75.75 0 0 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(CopyArrowRight);
export default ForwardRef;
