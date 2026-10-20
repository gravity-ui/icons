import * as React from 'react';
import type {SVGProps} from 'react';
const Minus = (props: SVGProps<SVGSVGElement>) => (
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
            d="M2 8q0 .207.146.354A.48.48 0 0 0 2.5 8.5h11a.48.48 0 0 0 .354-.146A.48.48 0 0 0 14 8a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146h-11a.48.48 0 0 0-.354.146A.48.48 0 0 0 2 8Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Minus;
