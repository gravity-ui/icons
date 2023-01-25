import * as React from 'react';
import {SVGProps} from 'react';
const TriangleExclamation = (props: SVGProps<SVGSVGElement>) => (
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
            d="m9.299 3.25 4.33 7.5A1.5 1.5 0 0 1 12.33 13H3.67a1.5 1.5 0 0 1-1.3-2.25l4.331-7.5c.577-1 2.02-1 2.598 0ZM5.402 2.5c1.155-2 4.041-2 5.196 0l4.33 7.5c1.155 2-.289 4.5-2.598 4.5H3.67C1.36 14.5-.083 12 1.072 10l4.33-7.5ZM8 4.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2A.75.75 0 0 1 8 4.75Zm1 5.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            clipRule="evenodd"
        />
    </svg>
);
export default TriangleExclamation;
