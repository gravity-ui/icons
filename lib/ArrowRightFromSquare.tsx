import * as React from 'react';
import {SVGProps} from 'react';
const ArrowRightFromSquare = (props: SVGProps<SVGSVGElement>) => (
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
            d="M15.03 8.53a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H5a.75.75 0 0 0 0 1.5h7.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5ZM8.75 5a.75.75 0 0 0 .75-.75V4a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h2.5a3 3 0 0 0 3-3v-.25a.75.75 0 0 0-1.5 0V12a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 12V4A1.5 1.5 0 0 1 4 2.5h2.5A1.5 1.5 0 0 1 8 4v.25c0 .414.336.75.75.75Z"
            clipRule="evenodd"
        />
    </svg>
);
export default ArrowRightFromSquare;
