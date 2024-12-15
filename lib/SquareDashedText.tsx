import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const SquareDashedText = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M3 4.5A1.5 1.5 0 0 1 4.5 3h1.75a.75.75 0 0 0 0-1.5H4.5a3 3 0 0 0-3 3v1.75a.75.75 0 0 0 1.5 0zm6.75-3a.75.75 0 0 0 0 1.5h1.75A1.5 1.5 0 0 1 13 4.5v1.75a.75.75 0 0 0 1.5 0V4.5a3 3 0 0 0-3-3zM3 9.75a.75.75 0 0 0-1.5 0v1.75a3 3 0 0 0 3 3h1.75a.75.75 0 0 0 0-1.5H4.5A1.5 1.5 0 0 1 3 11.5zm11.5 0a.75.75 0 0 0-1.5 0v1.75a1.5 1.5 0 0 1-1.5 1.5H9.75a.75.75 0 0 0 0 1.5h1.75a3 3 0 0 0 3-3zM5.752 4.502a.75.75 0 1 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zm0 2.75a.75.75 0 1 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zm0 2.75a.75.75 0 1 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(SquareDashedText);
export default ForwardRef;
