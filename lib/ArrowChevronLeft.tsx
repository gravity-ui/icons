import * as React from 'react';
import type {SVGProps} from 'react';
const ArrowChevronLeft = (props: SVGProps<SVGSVGElement>) => (
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
            d="M14.5 8a.48.48 0 0 0-.146-.354A.48.48 0 0 0 14 7.5H8.31a.24.24 0 0 1-.177-.073q-.177-.177 0-.354l2.72-2.72.007-.006a.48.48 0 0 0 .159-.357.48.48 0 0 0-.147-.362.48.48 0 0 0-.362-.147.48.48 0 0 0-.363.166l-4 4A.48.48 0 0 0 6 8q0 .207.146.353l4 4 .006.007a.48.48 0 0 0 .357.159.48.48 0 0 0 .362-.147q.15-.15.147-.362a.48.48 0 0 0-.166-.363l-2.72-2.72a.24.24 0 0 1-.073-.177q0-.25.25-.25H14a.48.48 0 0 0 .354-.146A.48.48 0 0 0 14.5 8Zm-8.15 3.643L2.882 8.177q-.177-.177 0-.354L6.35 4.357v-.001a.48.48 0 0 0 .131-.346.48.48 0 0 0-.146-.345.48.48 0 0 0-.345-.146.48.48 0 0 0-.346.13v.001L1.646 7.647A.48.48 0 0 0 1.5 8q0 .207.146.353l3.996 3.997h.001q.147.135.346.131a.48.48 0 0 0 .345-.146.48.48 0 0 0 .146-.345.48.48 0 0 0-.13-.346z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ArrowChevronLeft;
