import * as React from 'react';
import type {SVGProps} from 'react';
const DatabaseFill = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8 8.5c1.776 0 3.515-.263 4.87-.888A5.64 5.64 0 0 0 14 6.931V8c0 2-2.686 3-6 3s-6-1-6-3V6.93c.35.275.736.501 1.13.682C4.485 8.237 6.224 8.5 8 8.5ZM14 4c0 2-2.686 3-6 3S2 6 2 4c0-.336.076-.643.217-.923C2.92 1.692 5.242 1 8 1c.828 0 1.618.063 2.335.188C12.49 1.563 14 2.5 14 4ZM8 15c3.314 0 6-1 6-3v-1.07c-.35.275-.736.501-1.13.683-1.355.623-3.094.887-4.87.887-1.776 0-3.515-.264-4.87-.887A5.701 5.701 0 0 1 2 10.93V12c0 2 2.686 3 6 3Z"
            clipRule="evenodd"
        />
    </svg>
);
export default DatabaseFill;
