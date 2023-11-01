import * as React from 'react';
import type {SVGProps} from 'react';
const GripHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
            d="M3 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.5 1.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm0-5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm-5 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM13 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm1.5-3.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"
            clipRule="evenodd"
        />
    </svg>
);
export default GripHorizontal;
