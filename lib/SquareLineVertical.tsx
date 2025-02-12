import * as React from 'react';
import type {SVGProps} from 'react';
const SquareLineVertical = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8.75.75a.75.75 0 0 0-1.5 0v.75H4.5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h2.75v.75a.75.75 0 0 0 1.5 0v-.75h2.75a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3H8.75zM7.25 3H4.5A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h2.75zm1.5 10V3h2.75A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5z"
            clipRule="evenodd"
        />
    </svg>
);
export default SquareLineVertical;
