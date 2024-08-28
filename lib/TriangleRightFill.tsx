import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const TriangleRightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M13.756 10.164c1.665-.962 1.665-3.366 0-4.328L5.251.919C3.584-.045 1.5 1.158 1.5 3.083v9.834c0 1.925 2.084 3.128 3.751 2.164z"
        />
    </svg>
);
const ForwardRef = forwardRef(TriangleRightFill);
export default ForwardRef;
