import * as React from 'react';
import type {SVGProps} from 'react';
const PersonWorker = (props: SVGProps<SVGSVGElement>) => (
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
            d="M4.535 3A3.5 3.5 0 0 1 7.25.08v1.67a.75.75 0 1 0 1.5 0V.08A3.5 3.5 0 0 1 11.464 3h.286a.75.75 0 0 1 0 1.5h-.25a3.5 3.5 0 0 1-7 0h-.25a.75.75 0 0 1 0-1.5zM8 6.5a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2m-5.5 6c0-.204.22-.809 1.32-1.459a6 6 0 0 1 .223-.125L5.01 13.5H3.5a1 1 0 0 1-1-1m4.114 1-1.179-3.142A9.2 9.2 0 0 1 8 10c.93 0 1.8.135 2.565.357L9.387 13.5zm4.375 0H12.5a1 1 0 0 0 1-1c0-.204-.22-.809-1.32-1.459a6 6 0 0 0-.223-.125zM8 8.5c-3.85 0-7 2-7 4A2.5 2.5 0 0 0 3.5 15h9a2.5 2.5 0 0 0 2.5-2.5c0-2-3.15-4-7-4"
            clipRule="evenodd"
        />
    </svg>
);
export default PersonWorker;
