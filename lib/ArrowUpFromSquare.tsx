import * as React from 'react';
import {SVGProps} from 'react';
const ArrowUpFromSquare = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8.53.97a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 0 0 1.06 1.06l1.22-1.22V11a.75.75 0 0 0 1.5 0V3.31l1.22 1.22a.75.75 0 1 0 1.06-1.06L8.53.97ZM5 7.25a.75.75 0 0 0-.75-.75H4a3 3 0 0 0-3 3V12a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9.5a3 3 0 0 0-3-3h-.25a.75.75 0 0 0 0 1.5H12a1.5 1.5 0 0 1 1.5 1.5V12a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 12V9.5A1.5 1.5 0 0 1 4 8h.25A.75.75 0 0 0 5 7.25Z"
            clipRule="evenodd"
        />
    </svg>
);
export default ArrowUpFromSquare;
