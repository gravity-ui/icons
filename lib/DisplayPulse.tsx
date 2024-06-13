import * as React from 'react';
import type {SVGProps} from 'react';
const DisplayPulse = (props: SVGProps<SVGSVGElement>) => (
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
            d="M4 3h8a1.5 1.5 0 0 1 1.5 1.5v4A1.5 1.5 0 0 1 12 10H4a1.5 1.5 0 0 1-1.5-1.5v-1h2.25a.75.75 0 0 0 .564-.256l1.057-1.208L7.85 8.622A.75.75 0 0 0 9.1 8.7L10.375 7h1.375a.75.75 0 0 0 0-1.5H10a.75.75 0 0 0-.6.3l-.815 1.087-1.434-2.51a.75.75 0 0 0-1.215-.12L4.41 6H2.5V4.5A1.5 1.5 0 0 1 4 3M1 6.75V8.5a3 3 0 0 0 3 3h3.25V13h-2.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-2.5v-1.5H12a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3z"
            clipRule="evenodd"
        />
    </svg>
);
export default DisplayPulse;
