import * as React from 'react';
import type {SVGProps} from 'react';
const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
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
            d="M14.354 8.354A.48.48 0 0 0 14.5 8a.48.48 0 0 0-.146-.354A.48.48 0 0 0 14 7.5H3.81q-.25 0-.25-.25a.24.24 0 0 1 .073-.177L6.35 4.357v-.001a.48.48 0 0 0 .131-.346.48.48 0 0 0-.146-.345.48.48 0 0 0-.345-.146.48.48 0 0 0-.346.13v.001L1.646 7.647A.48.48 0 0 0 1.5 8q0 .207.146.353l4 4 .006.007a.48.48 0 0 0 .357.159.48.48 0 0 0 .362-.147q.15-.15.147-.362a.48.48 0 0 0-.166-.363l-2.72-2.72q-.177-.177 0-.354A.24.24 0 0 1 3.81 8.5H14a.48.48 0 0 0 .354-.146Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ArrowLeft;
