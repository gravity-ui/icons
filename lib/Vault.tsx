import * as React from 'react';
import type {SVGProps} from 'react';
const Vault = (props: SVGProps<SVGSVGElement>) => (
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
            d="M4.5 14.25v-.75h7v.75a.75.75 0 0 0 1.5 0v-.791a3 3 0 0 0 2.5-2.959v-6a3 3 0 0 0-3-3h-9a3 3 0 0 0-3 3v6A3 3 0 0 0 3 13.459v.791a.75.75 0 0 0 1.5 0M3.5 12h9a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 12.5 3h-9A1.5 1.5 0 0 0 2 4.5v6A1.5 1.5 0 0 0 3.5 12M8 8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m2.384-.246a2.5 2.5 0 0 0-.402-2.278l.66-.942a.75.75 0 0 0-1.229-.86l-.66.942a2.5 2.5 0 0 0-2.277.402l-.942-.66a.75.75 0 0 0-.86 1.228l.942.66a2.5 2.5 0 0 0 .402 2.277l-.66.943a.75.75 0 0 0 1.228.86l.66-.942a2.5 2.5 0 0 0 2.277-.402l.943.66a.75.75 0 1 0 .86-1.228z"
            clipRule="evenodd"
        />
    </svg>
);
export default Vault;
