import * as React from 'react';
import type {SVGProps} from 'react';
const TriangleExclamation = (props: SVGProps<SVGSVGElement>) => (
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
            d="m2 11.375 4.91-8.492v-.002l.008-.013q.36-.625 1.082-.625t1.083.625l4.916 8.507q.361.625 0 1.25-.36.625-1.082.625H3.083q-.722 0-1.082-.625-.362-.625 0-1.25ZM8.5 5.75a.48.48 0 0 0-.146-.354A.48.48 0 0 0 8 5.25a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354v2q0 .207.146.354A.48.48 0 0 0 8 8.25a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354zM8 11.5a.72.72 0 0 0 .53-.22.72.72 0 0 0 .22-.53.72.72 0 0 0-.22-.53A.72.72 0 0 0 8 10a.72.72 0 0 0-.53.22.72.72 0 0 0-.22.53q0 .31.22.53t.53.22ZM6.051 2.368l-4.917 8.506q-.315.546-.305 1.16.01.58.305 1.09a2.23 2.23 0 0 0 1.949 1.126h9.834q.63 0 1.157-.316.496-.3.792-.81a2.23 2.23 0 0 0-.001-2.25L9.948 2.368A2.23 2.23 0 0 0 8 1.244a2.23 2.23 0 0 0-1.95 1.124Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default TriangleExclamation;
