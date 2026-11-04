import * as React from 'react';
import type {SVGProps} from 'react';
const CheckShape = (props: SVGProps<SVGSVGElement>) => (
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
            d="M10.052 2.636 6.948 6.653a.24.24 0 0 1-.166.095.24.24 0 0 1-.2-.063l-1.44-1.31a1.45 1.45 0 0 0-1.09-.389q-.625.034-1.041.502L1.364 7.34a1.44 1.44 0 0 0-.376 1.095q.04.625.515 1.036l4.786 4.15q.482.417 1.118.36a1.44 1.44 0 0 0 1.035-.557l5.825-7.283q.374-.468.323-1.064a1.45 1.45 0 0 0-.498-.994l-1.857-1.651a1.44 1.44 0 0 0-1.136-.372 1.44 1.44 0 0 0-1.047.576Zm-5.583 3.48 2.402 2.183.04.037 3.931-5.088a.48.48 0 0 1 .35-.192.48.48 0 0 1 .378.124l1.856 1.65q.15.132.167.33a.48.48 0 0 1-.107.356l-5.824 7.281a.48.48 0 0 1-.346.186.48.48 0 0 1-.374-.122L2.158 8.715a.48.48 0 0 1-.171-.346.48.48 0 0 1 .125-.364L3.76 6.154a.48.48 0 0 1 .346-.168.48.48 0 0 1 .364.128z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default CheckShape;
