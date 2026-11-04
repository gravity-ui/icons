import * as React from 'react';
import type {SVGProps} from 'react';
const TriangleRight = (props: SVGProps<SVGSVGElement>) => (
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
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth={0.5}
            d="M13.63 6.051 5.127 1.134a2.23 2.23 0 0 0-2.25 0A2.23 2.23 0 0 0 1.75 3.083v9.834q0 .631.316 1.157.3.496.81.792a2.23 2.23 0 0 0 2.25-.001l8.505-4.917q.546-.316.843-.852.28-.507.28-1.096a2.23 2.23 0 0 0-1.123-1.949Zm-9.005-4.05 8.505 4.917q.625.36.625 1.082t-.625 1.083l-8.505 4.916q-.625.361-1.25 0-.625-.36-.625-1.082V3.083q0-.722.625-1.082.625-.362 1.25 0Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default TriangleRight;
