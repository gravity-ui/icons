import * as React from 'react';
import type {SVGProps} from 'react';
const TriangleThunderbolt = (props: SVGProps<SVGSVGElement>) => (
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
            d="M1.135 10.874q-.315.546-.305 1.16.01.58.304 1.09a2.23 2.23 0 0 0 1.949 1.126h9.834q.63 0 1.157-.316.496-.3.792-.81a2.23 2.23 0 0 0-.001-2.25L9.948 2.368A2.23 2.23 0 0 0 8 1.244a2.23 2.23 0 0 0-1.948 1.124zm.866.5 4.908-8.49.001-.002V2.88l.008-.013q.36-.625 1.082-.625t1.083.625l4.916 8.507q.361.625 0 1.25-.36.625-1.082.625H3.083q-.722 0-1.082-.625-.362-.625 0-1.25Zm6.22-5.566a.48.48 0 0 0-.38-.028.48.48 0 0 0-.288.247l-1.25 2.5a.47.47 0 0 0 .022.486.47.47 0 0 0 .425.237h1.287q.06 0 .112.026a.24.24 0 0 1 .125.145.24.24 0 0 1-.013.19l-.708 1.417a.48.48 0 0 0-.03.384.48.48 0 0 0 .252.29q.186.094.384.027a.48.48 0 0 0 .29-.256l1.25-2.5a.47.47 0 0 0-.023-.486.47.47 0 0 0-.426-.237H7.963a.25.25 0 0 1-.112-.026.24.24 0 0 1-.125-.145.24.24 0 0 1 .013-.19l.707-1.414a.48.48 0 0 0 .025-.38.48.48 0 0 0-.25-.287Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default TriangleThunderbolt;
