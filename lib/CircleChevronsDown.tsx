import * as React from 'react';
import type {SVGProps} from 'react';
const CircleChevronsDown = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M5.72 4.97a.75.75 0 0 1 1.06 0L8 6.19l1.22-1.22a.75.75 0 1 1 1.06 1.06L8.53 7.78a.75.75 0 0 1-1.06 0L5.72 6.03a.75.75 0 0 1 0-1.06m1.06 3.75a.75.75 0 0 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0l1.75-1.75a.75.75 0 1 0-1.06-1.06L8 9.94z"
            clipRule="evenodd"
        />
    </svg>
);
export default CircleChevronsDown;
