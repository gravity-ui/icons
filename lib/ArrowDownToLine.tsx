import * as React from 'react';
import type {SVGProps} from 'react';
const ArrowDownToLine = (props: SVGProps<SVGSVGElement>) => (
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
            d="M7.647 11.603A.48.48 0 0 0 8 11.75a.48.48 0 0 0 .353-.146l2.5-2.5.007-.006a.48.48 0 0 0 .159-.357.48.48 0 0 0-.147-.362.48.48 0 0 0-.362-.147.48.48 0 0 0-.363.166l-1.22 1.22q-.177.177-.354 0A.24.24 0 0 1 8.5 9.44V1.75a.48.48 0 0 0-.146-.354A.48.48 0 0 0 8 1.25a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354v7.69q0 .25-.25.25a.24.24 0 0 1-.177-.073L5.857 8.4h-.001a.48.48 0 0 0-.346-.131.48.48 0 0 0-.345.146.48.48 0 0 0-.146.345.48.48 0 0 0 .13.346h.001zM1.25 14.25q0 .207.146.354a.48.48 0 0 0 .354.146h12.5a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146H1.75a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ArrowDownToLine;
