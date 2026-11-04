import * as React from 'react';
import type {SVGProps} from 'react';
const BarsAscendingAlignCenter = (props: SVGProps<SVGSVGElement>) => (
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
            d="M6.25 3.25q0 .207.146.354a.48.48 0 0 0 .354.146h2.5a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146h-2.5a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354ZM3.75 8.5h8.5a.48.48 0 0 0 .354-.146A.48.48 0 0 0 12.75 8a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146h-8.5a.48.48 0 0 0-.354.146A.48.48 0 0 0 3.25 8q0 .207.147.353a.48.48 0 0 0 .353.147Zm-2 4.75h12.5a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146H1.75a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354q0 .207.147.353a.48.48 0 0 0 .353.147Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default BarsAscendingAlignCenter;
