import * as React from 'react';
import type {SVGProps} from 'react';
const TriangleDown = (props: SVGProps<SVGSVGElement>) => (
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
            d="M6.051 13.63q.316.547.853.844.507.28 1.096.28a2.23 2.23 0 0 0 1.948-1.123l4.917-8.505q.315-.547.305-1.16a2.2 2.2 0 0 0-.304-1.09 2.23 2.23 0 0 0-1.949-1.126H3.083q-.631 0-1.157.316-.498.3-.792.81a2.23 2.23 0 0 0 0 2.25zm-4.05-9.005Q1.638 4 2 3.375q.36-.625 1.082-.625h9.834q.722 0 1.083.625.36.625 0 1.25L9.082 13.13q-.361.625-1.083.625t-1.082-.625z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default TriangleDown;
