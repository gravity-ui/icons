import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const CircleStopFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1M6.5 5.25c-.69 0-1.25.56-1.25 1.25v3c0 .69.56 1.25 1.25 1.25h3c.69 0 1.25-.56 1.25-1.25v-3c0-.69-.56-1.25-1.25-1.25z"
        />
    </svg>
);
const ForwardRef = forwardRef(CircleStopFill);
export default ForwardRef;
