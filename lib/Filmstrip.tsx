import * as React from 'react';
import type {SVGProps} from 'react';
const Filmstrip = (props: SVGProps<SVGSVGElement>) => (
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
            d="M11.5 3.5h.5A1.5 1.5 0 0 1 13.5 5v.5h-2zm0 3.5v2h2V7zM15 7v4a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3zm-1.5 3.5h-2v2h.5a1.5 1.5 0 0 0 1.5-1.5zm-3.5-7H6v9h4zm-5.5 9v-2h-2v.5A1.5 1.5 0 0 0 4 12.5zm0-5.5v2h-2V7zm0-1.5h-2V5A1.5 1.5 0 0 1 4 3.5h.5z"
            clipRule="evenodd"
        />
    </svg>
);
export default Filmstrip;
