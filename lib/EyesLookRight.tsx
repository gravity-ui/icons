import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const EyesLookRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M4.75 5.5c.427 0 .791.163 1.075.45-.145-.778-.37-1.415-.64-1.894C4.72 3.236 4.216 3 3.75 3s-.97.237-1.434 1.056C1.835 4.906 1.5 6.25 1.5 8s.335 3.094.816 3.944c.463.82.967 1.056 1.434 1.056s.97-.237 1.434-1.056c.272-.48.496-1.116.64-1.895a1.47 1.47 0 0 1-1.074.451C3.674 10.5 3 9.47 3 8s.674-2.5 1.75-2.5M7.5 8c0 3.822-1.445 6.5-3.75 6.5S0 11.822 0 8s1.445-6.5 3.75-6.5S7.5 4.178 7.5 8m6.825 2.05c-.145.778-.37 1.415-.64 1.894-.464.82-.968 1.056-1.435 1.056s-.97-.237-1.434-1.056C10.335 11.094 10 9.75 10 8s.335-3.094.816-3.944C11.279 3.236 11.783 3 12.25 3s.97.237 1.434 1.056c.272.48.496 1.116.64 1.895A1.47 1.47 0 0 0 13.25 5.5c-1.076 0-1.75 1.03-1.75 2.5s.674 2.5 1.75 2.5a1.47 1.47 0 0 0 1.075-.45M16 8c0 3.822-1.445 6.5-3.75 6.5S8.5 11.822 8.5 8s1.445-6.5 3.75-6.5S16 4.178 16 8"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(EyesLookRight);
export default ForwardRef;
