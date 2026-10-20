import * as React from 'react';
import type {SVGProps} from 'react';
const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
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
            d="M2 7.5a.48.48 0 0 0-.354.146A.48.48 0 0 0 1.5 8q0 .207.146.354A.48.48 0 0 0 2 8.5h10.19a.24.24 0 0 1 .177.073.24.24 0 0 1 .073.177.24.24 0 0 1-.073.177l-2.72 2.72-.007.006a.48.48 0 0 0-.159.357.48.48 0 0 0 .147.362q.15.15.362.147a.48.48 0 0 0 .363-.166l4-4A.48.48 0 0 0 14.5 8a.48.48 0 0 0-.146-.353L10.357 3.65h-.001a.48.48 0 0 0-.346-.131.48.48 0 0 0-.345.146.48.48 0 0 0-.146.345.48.48 0 0 0 .13.346h.001l2.717 2.717a.24.24 0 0 1 .073.177.24.24 0 0 1-.073.177.24.24 0 0 1-.177.073z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ArrowRight;
