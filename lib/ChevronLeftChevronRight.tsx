import * as React from 'react';
import {SVGProps} from 'react';
const ChevronLeftChevronRight = (props: SVGProps<SVGSVGElement>) => (
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
            d="M11.53 3.97a.75.75 0 1 0-1.06 1.06L13.44 8l-2.97 2.97a.75.75 0 1 0 1.06 1.06l3.5-3.5a.75.75 0 0 0 0-1.06l-3.5-3.5Zm-6 1.06a.75.75 0 0 0-1.06-1.06l-3.5 3.5a.75.75 0 0 0 0 1.06l3.5 3.5a.75.75 0 0 0 1.06-1.06L2.56 8l2.97-2.97Z"
            clipRule="evenodd"
        />
    </svg>
);
export default ChevronLeftChevronRight;
