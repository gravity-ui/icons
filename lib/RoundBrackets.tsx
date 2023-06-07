import * as React from 'react';
import {SVGProps} from 'react';
const RoundBrackets = (props: SVGProps<SVGSVGElement>) => (
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
            d="M11.22 2.28a.75.75 0 0 1 1.06-1.06 9.589 9.589 0 0 1 0 13.56.75.75 0 1 1-1.06-1.06 8.089 8.089 0 0 0 0-11.44Zm-6.44 0a.75.75 0 0 0-1.06-1.06 9.589 9.589 0 0 0 0 13.56.75.75 0 0 0 1.06-1.06 8.089 8.089 0 0 1 0-11.44Z"
            clipRule="evenodd"
        />
    </svg>
);
export default RoundBrackets;
