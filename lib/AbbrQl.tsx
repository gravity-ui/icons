import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const AbbrQl = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M10.75 4a.75.75 0 0 1 .75.75v5.75h2.75a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75v-6.5a.75.75 0 0 1 .75-.75m-3.21 6.997c.611-.666.96-1.665.96-2.997 0-2.667-1.4-4-3.5-4S1.5 5.333 1.5 8s1.4 4 3.5 4q.674 0 1.24-.182l1.456 1.461a.75.75 0 1 0 1.063-1.058zM7 8c0 1.083-.282 1.675-.567 1.985-.27.294-.708.515-1.433.515s-1.163-.22-1.433-.515C3.282 9.675 3 9.083 3 8c0-1.082.282-1.675.567-1.985C3.837 5.72 4.275 5.5 5 5.5s1.163.22 1.433.515C6.718 6.325 7 6.918 7 8"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(AbbrQl);
export default ForwardRef;
