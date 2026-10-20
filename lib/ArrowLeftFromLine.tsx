import * as React from 'react';
import type {SVGProps} from 'react';
const ArrowLeftFromLine = (props: SVGProps<SVGSVGElement>) => (
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
            d="M14.25 14.75a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354V1.75a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354v12.5q0 .207.146.354a.48.48 0 0 0 .354.146ZM1.397 7.647A.48.48 0 0 0 1.25 8q0 .207.146.353l2.5 2.5.006.007a.48.48 0 0 0 .357.159.48.48 0 0 0 .362-.147q.15-.15.147-.362a.48.48 0 0 0-.166-.363l-1.22-1.22q-.177-.177 0-.354A.24.24 0 0 1 3.56 8.5h7.69a.48.48 0 0 0 .354-.146A.48.48 0 0 0 11.75 8a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146H3.56a.24.24 0 0 1-.177-.073.24.24 0 0 1-.073-.177.24.24 0 0 1 .073-.177L4.6 5.857v-.001a.48.48 0 0 0 .131-.346.48.48 0 0 0-.146-.345.48.48 0 0 0-.345-.146.48.48 0 0 0-.346.13v.001L1.396 7.647Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ArrowLeftFromLine;
