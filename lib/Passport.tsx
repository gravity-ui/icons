import * as React from 'react';
import {SVGProps} from 'react';
const Passport = (props: SVGProps<SVGSVGElement>) => (
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
            d="M3.5 4v8A1.5 1.5 0 0 0 5 13.5h6a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 11 2.5H5A1.5 1.5 0 0 0 3.5 4ZM2 12a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v8Zm3.5-1.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75ZM9 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm1.5 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Passport;