import * as React from 'react';
import type {SVGProps} from 'react';
const PencilToLine = (props: SVGProps<SVGSVGElement>) => (
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
            d="M12.238 3.64a1.854 1.854 0 0 0-1.629-1.628l-.8.8a3.367 3.367 0 0 1 1.63 1.628l.799-.8ZM4.74 7.88l3.87-3.868a1.854 1.854 0 0 1 1.628 1.629L6.369 9.51a1.5 1.5 0 0 1-.814.418l-1.48.247.247-1.48a1.5 1.5 0 0 1 .418-.814ZM9.72.78l-2 2-4.04 4.04a3 3 0 0 0-.838 1.628L2.48 10.62a1 1 0 0 0 1.151 1.15l2.17-.36a3 3 0 0 0 1.629-.839l4.04-4.04 2-2c.18-.18.28-.423.28-.677A3.353 3.353 0 0 0 10.397.5c-.254 0-.498.1-.678.28ZM2.75 13a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H2.75Z"
            clipRule="evenodd"
        />
    </svg>
);
export default PencilToLine;
