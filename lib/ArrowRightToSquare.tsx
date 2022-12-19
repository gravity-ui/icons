import * as React from 'react';
import {SVGProps} from 'react';
const ArrowRightToSquare = (props: SVGProps<SVGSVGElement>) => (
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
            d="M2 7.25a.75.75 0 0 0 0 1.5h7.19L7.97 9.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 1.06l1.22 1.22H2ZM4.75 11a.75.75 0 0 0-.75.75V12a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v.25a.75.75 0 0 0 1.5 0V4A1.5 1.5 0 0 1 7 2.5h5A1.5 1.5 0 0 1 13.5 4v8a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 12v-.25a.75.75 0 0 0-.75-.75Z"
            clipRule="evenodd"
        />
    </svg>
);
export default ArrowRightToSquare;
