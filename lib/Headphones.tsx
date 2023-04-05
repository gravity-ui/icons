import * as React from 'react';
import {SVGProps} from 'react';
const Headphones = (props: SVGProps<SVGSVGElement>) => (
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
            d="M15 8A7 7 0 1 0 1 8v4h.01a3.25 3.25 0 0 0 3.24 3h.083C5.253 15 6 14.254 6 13.333v-3.166C6 9.247 5.254 8.5 4.333 8.5H4.25c-.644 0-1.245.188-1.75.51V8a5.5 5.5 0 1 1 11 0v1.01a3.235 3.235 0 0 0-1.75-.51h-.083c-.92 0-1.667.746-1.667 1.667v3.166c0 .92.746 1.667 1.667 1.667h.083a3.25 3.25 0 0 0 3.24-3H15V8Zm-1.5 3.75A1.75 1.75 0 0 0 11.75 10h-.083a.167.167 0 0 0-.167.167v3.166c0 .092.075.167.167.167h.083a1.75 1.75 0 0 0 1.75-1.75ZM4.25 13.5a1.75 1.75 0 1 1 0-3.5h.083c.092 0 .167.075.167.167v3.166a.167.167 0 0 1-.167.167H4.25Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Headphones;
