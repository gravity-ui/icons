import * as React from 'react';
import type {SVGProps} from 'react';
const PersonPencil = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1 1.225a.71.71 0 0 0-.679-.72A11.087 11.087 0 0 0 8 8.5c-3.85 0-7 2-7 4A2.5 2.5 0 0 0 3.5 15h2.25a.75.75 0 0 0 0-1.5H3.5a1 1 0 0 1-1-1c0-.204.22-.809 1.32-1.459C4.838 10.44 6.32 10 8 10c.058 0 .117 0 .175.002.442.008.825-.335.825-.777Zm3.59.307c.434.102.776.444.879.878l-2.823 2.822a1.5 1.5 0 0 1-.848.425l-.53.075.075-.53a1.5 1.5 0 0 1 .425-.848l2.822-2.822Zm-.883 4.76 3.068-3.067a.767.767 0 0 0 .225-.543A2.683 2.683 0 0 0 12.318 8a.766.766 0 0 0-.543.224l-3.068 3.069a3 3 0 0 0-.848 1.697l-.17 1.19a1 1 0 0 0 1.13 1.131l1.191-.17a3 3 0 0 0 1.697-.848Z"
            clipRule="evenodd"
        />
    </svg>
);
export default PersonPencil;
