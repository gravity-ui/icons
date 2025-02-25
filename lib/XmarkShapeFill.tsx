import * as React from 'react';
import type {SVGProps} from 'react';
const XmarkShapeFill = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8 12.243 6.232 14.01a1.5 1.5 0 0 1-2.121 0L1.99 11.89a1.5 1.5 0 0 1 0-2.122L3.757 8 1.99 6.232a1.5 1.5 0 0 1 0-2.121L4.11 1.99a1.5 1.5 0 0 1 2.122 0L8 3.757 9.768 1.99a1.5 1.5 0 0 1 2.121 0l2.122 2.12a1.5 1.5 0 0 1 0 2.122L12.243 8l1.767 1.768a1.5 1.5 0 0 1 0 2.121l-2.12 2.121a1.5 1.5 0 0 1-2.122 0z"
            clipRule="evenodd"
        />
    </svg>
);
export default XmarkShapeFill;
