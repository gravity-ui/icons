import * as React from 'react';
import {SVGProps} from 'react';
const Dice6 = (props: SVGProps<SVGSVGElement>) => (
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
            d="M11.5 3h-7A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3Zm-7-1.5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3h-7ZM11.75 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6.5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-6.5-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6.5 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-6.5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Dice6;