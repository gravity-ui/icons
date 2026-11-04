import * as React from 'react';
import type {SVGProps} from 'react';
const ArrowDownLeft = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.073 2.927a.48.48 0 0 0-.35-.146.48.48 0 0 0-.352.14l-8.173 8.174a.24.24 0 0 1-.177.073.24.24 0 0 1-.177-.073.24.24 0 0 1-.073-.177V7.076a.48.48 0 0 0-.153-.337.48.48 0 0 0-.348-.14.48.48 0 0 0-.347.14.48.48 0 0 0-.153.337v5.652q0 .207.146.354a.48.48 0 0 0 .354.146h5.659a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146H5.083a.24.24 0 0 1-.177-.073.24.24 0 0 1-.073-.177.24.24 0 0 1 .073-.177l8.176-8.176a.48.48 0 0 0 .137-.348.48.48 0 0 0-.146-.35Z"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ArrowDownLeft;
