import * as React from 'react';
import type {SVGProps} from 'react';
const CaretDown = (props: SVGProps<SVGSVGElement>) => (
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
            d="M4.177 6.705A.73.73 0 0 1 4.729 5.5h6.542a.73.73 0 0 1 .552 1.205L8.8 10.214a1 1 0 0 1-.757.347h-.084a1 1 0 0 1-.757-.347L4.177 6.705Z"
            clipRule="evenodd"
        />
    </svg>
);
export default CaretDown;
