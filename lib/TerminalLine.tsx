import * as React from 'react';
import type {SVGProps} from 'react';
const TerminalLine = (props: SVGProps<SVGSVGElement>) => (
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
            d="M1.22 11.22a.75.75 0 1 0 1.06 1.06l3.75-3.75a.75.75 0 0 0 0-1.06L2.28 3.72a.75.75 0 0 0-1.06 1.06L4.44 8l-3.22 3.22Zm13.03 1.28a.75.75 0 0 0 0-1.5h-6.5a.75.75 0 0 0 0 1.5h6.5Z"
            clipRule="evenodd"
        />
    </svg>
);
export default TerminalLine;
