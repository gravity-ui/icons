import * as React from 'react';
import type {SVGProps} from 'react';
const LayoutHeaderColumns = (props: SVGProps<SVGSVGElement>) => (
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
            d="M12 3.5H4A1.5 1.5 0 0 0 2.5 5v.5h11V5A1.5 1.5 0 0 0 12 3.5M2.5 11V7h4.75v5.5H4A1.5 1.5 0 0 1 2.5 11m6.25 1.5H12a1.5 1.5 0 0 0 1.5-1.5V7H8.75zM4 2a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3z"
            clipRule="evenodd"
        />
    </svg>
);
export default LayoutHeaderColumns;
