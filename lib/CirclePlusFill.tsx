import * as React from 'react';
import type {SVGProps} from 'react';
const CirclePlusFill = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm.75-9.5a.75.75 0 0 0-1.5 0v1.75H5.5a.75.75 0 0 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0V8.75h1.75a.75.75 0 0 0 0-1.5H8.75V5.5Z"
            clipRule="evenodd"
        />
    </svg>
);
export default CirclePlusFill;
