import * as React from 'react';
import type {SVGProps} from 'react';
const SquareLetterP = (props: SVGProps<SVGSVGElement>) => (
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
            d="M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3m-3 1.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3zm5.25 0a.75.75 0 0 0-.75.75v5.5a.75.75 0 0 0 1.5 0V9.5h.75a2.5 2.5 0 0 0 0-5zM8.25 8H7.5V6h.75a1 1 0 0 1 0 2"
            clipRule="evenodd"
        />
    </svg>
);
export default SquareLetterP;
