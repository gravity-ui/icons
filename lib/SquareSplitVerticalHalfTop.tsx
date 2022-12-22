import * as React from 'react';
import {SVGProps} from 'react';
const SquareSplitVerticalHalfTop = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8.75 3h2.75A1.5 1.5 0 0 1 13 4.5v2.75H8.75V3Zm-1.5 0H4.5A1.5 1.5 0 0 0 3 4.5v2.75h4.25V3ZM3 8.75v2.75A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5V8.75H3ZM1.5 4.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3v-7Z"
            clipRule="evenodd"
        />
    </svg>
);
export default SquareSplitVerticalHalfTop;
