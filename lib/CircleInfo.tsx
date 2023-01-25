import * as React from 'react';
import {SVGProps} from 'react';
const CircleInfo = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11ZM8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm1-9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-.25 3a.75.75 0 0 0-1.5 0V11a.75.75 0 0 0 1.5 0V8.5Z"
            clipRule="evenodd"
        />
    </svg>
);
export default CircleInfo;
