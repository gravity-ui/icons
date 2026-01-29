import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const ChevronsCollapseHorizontal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M2.141 3.58a.75.75 0 0 0-1.06 1.061L4.439 8l-3.353 3.354a.75.75 0 1 0 1.06 1.06L6.03 8.53a.75.75 0 0 0 0-1.06zm11.718 8.84a.75.75 0 0 0 1.06-1.061L11.561 8l3.353-3.354a.75.75 0 0 0-1.06-1.06L9.97 7.47a.75.75 0 0 0 0 1.06z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(ChevronsCollapseHorizontal);
export default ForwardRef;
