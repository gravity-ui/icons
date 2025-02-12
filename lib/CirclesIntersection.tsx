import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const CirclesIntersection = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M6.576 11.854a4 4 0 1 1 0-7.707A5.48 5.48 0 0 0 5 8c0 1.5.601 2.861 1.576 3.854M8 12.9a5.5 5.5 0 1 1 0-9.8 5.5 5.5 0 1 1 0 9.8m1.424-8.754A4.003 4.003 0 0 1 14.5 8a4 4 0 0 1-5.076 3.854A5.48 5.48 0 0 0 11 8c0-1.5-.601-2.861-1.576-3.854M8 4.877C8.914 5.61 9.5 6.737 9.5 8s-.586 2.39-1.5 3.123A4 4 0 0 1 6.5 8c0-1.263.586-2.39 1.5-3.123"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(CirclesIntersection);
export default ForwardRef;
