import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const Text = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M3.279 2.544A.75.75 0 0 1 4 2h8a.75.75 0 0 1 .721.544l.5 1.75a.75.75 0 1 1-1.442.412L11.434 3.5H8.75l-.004 9H9.5a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.746l.004-9H4.566L4.22 4.706a.75.75 0 1 1-1.442-.412z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(Text);
export default ForwardRef;
