import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const TextAlignJustify = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M2.75 2a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zM2 6.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 6.25M2.75 9a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zm0 3.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(TextAlignJustify);
export default ForwardRef;
