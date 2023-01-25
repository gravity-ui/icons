import * as React from 'react';
import {SVGProps} from 'react';
const Circles4Square = (props: SVGProps<SVGSVGElement>) => (
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
            d="M4.75 6a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM2 4.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0ZM11.25 6a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM8.5 4.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0Zm1.5 6.5a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0Zm1.25-2.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm-6.5 4a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM2 11.25a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Circles4Square;
