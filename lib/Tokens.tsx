import * as React from 'react';
import type {SVGProps} from 'react';
const Tokens = (props: SVGProps<SVGSVGElement>) => (
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
            d="m4 8.5.204.01a2 2 0 0 1 1.785 1.786L6 10.5v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1a2 2 0 0 1 1.796-1.99L3 8.5zM3 10a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1A.5.5 0 0 0 4 10zm10-1.5a2 2 0 0 1 1.99 1.796l.01.204v1a2 2 0 0 1-2 2H9l-.204-.01A2 2 0 0 1 7 11.5v-1a2 2 0 0 1 2-2zM9 10a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM8 2.5a2 2 0 0 1 2 2v1a2 2 0 0 1-1.796 1.99L8 7.5H3l-.204-.01A2 2 0 0 1 1.01 5.703L1 5.5v-1a2 2 0 0 1 2-2zM3 4a.5.5 0 0 0-.5.5v1A.5.5 0 0 0 3 6h5a.5.5 0 0 0 .5-.5v-1A.5.5 0 0 0 8 4zm10-1.5a2 2 0 0 1 2 2v1a2 2 0 0 1-3.99.204L11 5.5v-1a2 2 0 0 1 2-2M13 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1A.5.5 0 0 0 13 4"
            clipRule="evenodd"
        />
    </svg>
);
export default Tokens;
