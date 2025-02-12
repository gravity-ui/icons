import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const CircleNumber0 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M9.5 8c0 .923-.236 1.396-.44 1.622C8.875 9.828 8.565 10 8 10s-.875-.172-1.06-.378C6.736 9.396 6.5 8.923 6.5 8s.236-1.395.44-1.621C7.125 6.173 7.435 6 8 6s.875.173 1.06.379c.204.226.44.698.44 1.621M11 8c0 2.333-1.2 3.5-3 3.5S5 10.333 5 8s1.2-3.5 3-3.5 3 1.167 3 3.5"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(CircleNumber0);
export default ForwardRef;
