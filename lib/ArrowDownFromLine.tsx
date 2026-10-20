import * as React from 'react';
import type {SVGProps} from 'react';
const ArrowDownFromLine = (props: SVGProps<SVGSVGElement>) => (
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
            d="M14.75 1.75a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146H1.75a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354q0 .207.146.354a.48.48 0 0 0 .354.146h12.5a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354ZM5.147 12.103l2.5 2.5A.48.48 0 0 0 8 14.75a.48.48 0 0 0 .353-.146l2.5-2.5.007-.006a.48.48 0 0 0 .159-.357.48.48 0 0 0-.147-.362.48.48 0 0 0-.362-.147.48.48 0 0 0-.363.166l-1.22 1.22q-.177.177-.354 0a.24.24 0 0 1-.073-.177V4.75a.48.48 0 0 0-.146-.354A.48.48 0 0 0 8 4.25a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354v7.69q0 .25-.25.25a.24.24 0 0 1-.177-.073l-1.22-1.22-.006-.007a.48.48 0 0 0-.357-.159.48.48 0 0 0-.362.147q-.15.15-.147.362a.48.48 0 0 0 .166.363Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ArrowDownFromLine;
