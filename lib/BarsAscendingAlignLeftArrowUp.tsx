import * as React from 'react';
import {SVGProps} from 'react';
const BarsAscendingAlignLeftArrowUp = (props: SVGProps<SVGSVGElement>) => (
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
            d="M7.75 13.5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5h-7.5ZM7 8c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 7 8Zm0-4.75c0 .414.336.75.75.75h2.5a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 0-.75.75Z"
            clipRule="evenodd"
        />
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m2.75 3.25 2 2m-2-2-2 2m2-2v9.5"
        />
    </svg>
);
export default BarsAscendingAlignLeftArrowUp;
