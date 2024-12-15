import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const CaretRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M6.705 11.823a.73.73 0 0 1-1.205-.552V4.729a.73.73 0 0 1 1.205-.552L10.214 7.2a1 1 0 0 1 .347.757v.084a1 1 0 0 1-.347.757z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(CaretRight);
export default ForwardRef;
