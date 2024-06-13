import * as React from 'react';
import type {SVGProps} from 'react';
const Dice3 = (props: SVGProps<SVGSVGElement>) => (
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
            d="M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3m-3 1.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3zm9 2.15a1.15 1.15 0 1 0 0-2.3 1.15 1.15 0 0 0 0 2.3M9.15 8a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0M5.5 11.65a1.15 1.15 0 1 0 0-2.3 1.15 1.15 0 0 0 0 2.3"
            clipRule="evenodd"
        />
    </svg>
);
export default Dice3;
