import * as React from 'react';
import type {SVGProps} from 'react';
const SquareBrackets = (props: SVGProps<SVGSVGElement>) => (
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
            d="M3.75 1A2.25 2.25 0 0 0 1.5 3.25v9.5A2.25 2.25 0 0 0 3.75 15h.5a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 1-.75-.75v-9.5a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 0 0-1.5zm8.5 14a2.25 2.25 0 0 0 2.25-2.25v-9.5A2.25 2.25 0 0 0 12.25 1h-.5a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 0 0 1.5z"
            clipRule="evenodd"
        />
    </svg>
);
export default SquareBrackets;
