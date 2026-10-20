import * as React from 'react';
import type {SVGProps} from 'react';
const ObjectAlignRight = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.25 14.75a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354V1.75a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354v12.5q0 .207.146.354a.48.48 0 0 0 .354.146ZM10.75 7q0-.932-.659-1.591-.66-.66-1.591-.659H4q-.932 0-1.591.659-.66.66-.659 1.591v2q0 .932.659 1.591.66.66 1.591.659h4.5q.932 0 1.591-.659.66-.66.659-1.591zm-1 2q0 .518-.366.884a1.2 1.2 0 0 1-.884.366H4q-.518 0-.884-.366A1.2 1.2 0 0 1 2.75 9V7q0-.518.366-.884T4 5.75h4.5q.518 0 .884.366T9.75 7z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ObjectAlignRight;
