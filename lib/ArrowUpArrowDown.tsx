import * as React from 'react';
import {SVGProps} from 'react';
const ArrowUpArrowDown = (props: SVGProps<SVGSVGElement>) => (
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
            d="M4.22 2.22a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1-1.06 1.06l-.97-.97v8.69a.75.75 0 0 1-1.5 0V4.56l-.97.97a.75.75 0 0 1-1.06-1.06l2.25-2.25ZM12 11.44l.97-.97a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l.97.97V2.75a.75.75 0 0 1 1.5 0v8.69Z"
            clipRule="evenodd"
        />
    </svg>
);
export default ArrowUpArrowDown;
