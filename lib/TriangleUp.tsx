import * as React from 'react';
import type {SVGProps} from 'react';
const TriangleUp = (props: SVGProps<SVGSVGElement>) => (
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
            d="m6.051 2.369-4.917 8.505q-.315.546-.305 1.16.01.58.305 1.09a2.23 2.23 0 0 0 1.949 1.126h9.834q.63 0 1.157-.316.496-.3.792-.81a2.23 2.23 0 0 0-.001-2.25L9.948 2.37A2.23 2.23 0 0 0 8 1.245 2.23 2.23 0 0 0 6.05 2.37Zm-4.05 9.006L6.918 2.87q.36-.625 1.082-.625t1.083.625l4.916 8.505q.361.625 0 1.25-.36.625-1.082.625H3.083q-.722 0-1.082-.625-.362-.625 0-1.25Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default TriangleUp;
