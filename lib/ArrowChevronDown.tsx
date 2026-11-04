import * as React from 'react';
import type {SVGProps} from 'react';
const ArrowChevronDown = (props: SVGProps<SVGSVGElement>) => (
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
            d="M11.643 5.15 8.927 7.868a.24.24 0 0 1-.177.073q-.25 0-.25-.25V2a.48.48 0 0 0-.146-.354A.48.48 0 0 0 8 1.5a.48.48 0 0 0-.354.146A.48.48 0 0 0 7.5 2v5.69a.24.24 0 0 1-.073.177.24.24 0 0 1-.177.073.24.24 0 0 1-.177-.073L4.357 5.15h-.001a.48.48 0 0 0-.346-.131.48.48 0 0 0-.345.146.48.48 0 0 0-.146.345.48.48 0 0 0 .13.346h.001l3.997 3.997A.48.48 0 0 0 8 10a.48.48 0 0 0 .353-.146l3.997-3.996v-.001a.48.48 0 0 0 .131-.346.48.48 0 0 0-.146-.345.48.48 0 0 0-.345-.146.48.48 0 0 0-.346.13zM3.65 10.357l3.997 3.996A.48.48 0 0 0 8 14.5a.48.48 0 0 0 .353-.146l4-4 .007-.006a.48.48 0 0 0 .159-.357.48.48 0 0 0-.147-.362.48.48 0 0 0-.362-.147.48.48 0 0 0-.363.166l-3.47 3.47q-.177.177-.354 0L4.357 9.65h-.001a.48.48 0 0 0-.346-.131.48.48 0 0 0-.345.146.48.48 0 0 0-.146.345.48.48 0 0 0 .13.346z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ArrowChevronDown;
