import * as React from 'react';
import type {SVGProps} from 'react';
const TriangleLeft = (props: SVGProps<SVGSVGElement>) => (
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
            d="M2.37 6.051h-.001q-.546.316-.843.853-.28.507-.28 1.096a2.23 2.23 0 0 0 1.123 1.948l8.505 4.917q.546.315 1.16.305.58-.01 1.09-.304a2.23 2.23 0 0 0 1.126-1.949V3.083q0-.631-.316-1.157-.3-.497-.81-.792a2.23 2.23 0 0 0-2.25 0zm9.005-4.05q.625-.362 1.25 0 .625.36.625 1.082v9.834q0 .722-.625 1.083-.625.36-1.25 0L2.87 9.082Q2.245 8.722 2.245 8t.625-1.082z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default TriangleLeft;
