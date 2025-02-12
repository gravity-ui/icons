import * as React from 'react';
import type {SVGProps} from 'react';
const TrapezoidUpLineVertical = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3.306 4.13a1.75 1.75 0 0 1 1.71-1.38h5.968a1.75 1.75 0 0 1 1.71 1.38l1.516 7a1.75 1.75 0 0 1-1.71 2.12h-9a1.75 1.75 0 0 1-1.71-2.12zM8 .75v14.5"
        />
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8.75.75a.75.75 0 0 0-1.5 0V2H5.016a2.5 2.5 0 0 0-2.443 1.97l-1.517 7A2.5 2.5 0 0 0 3.5 14h3.75v1.25a.75.75 0 0 0 1.5 0V14h3.75a2.5 2.5 0 0 0 2.444-3.03l-1.517-7A2.5 2.5 0 0 0 10.984 2H8.75zM7.25 3.5H5.016a1 1 0 0 0-.977.788l-1.517 7A1 1 0 0 0 3.5 12.5h3.75zm1.5 9v-9h2.233a1 1 0 0 1 .978.788l1.516 7A1 1 0 0 1 12.5 12.5z"
            clipRule="evenodd"
        />
    </svg>
);
export default TrapezoidUpLineVertical;
