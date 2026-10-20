import * as React from 'react';
import type {SVGProps} from 'react';
const Ban = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8 14.75a6.7 6.7 0 0 0 2.485-.474 6.7 6.7 0 0 0 2.288-1.503 6.7 6.7 0 0 0 1.503-2.288A6.7 6.7 0 0 0 14.75 8a6.7 6.7 0 0 0-.474-2.485 6.7 6.7 0 0 0-1.503-2.288 6.7 6.7 0 0 0-2.288-1.503A6.7 6.7 0 0 0 8 1.25a6.7 6.7 0 0 0-2.485.474 6.7 6.7 0 0 0-2.288 1.503 6.7 6.7 0 0 0-1.503 2.288A6.7 6.7 0 0 0 1.25 8q0 1.288.474 2.485a6.7 6.7 0 0 0 1.503 2.288 6.7 6.7 0 0 0 2.288 1.503A6.7 6.7 0 0 0 8 14.75ZM4.5 3.794a.25.25 0 0 1 .026-.376 5.57 5.57 0 0 1 3.867-1.156 5.57 5.57 0 0 1 3.674 1.67 5.57 5.57 0 0 1 1.671 3.675A5.57 5.57 0 0 1 12.56 11.5q-.177.177-.354 0zm-.567 8.273a5.57 5.57 0 0 1-1.671-3.674A5.57 5.57 0 0 1 3.44 4.5a.24.24 0 0 1 .177-.073.24.24 0 0 1 .177.073l7.706 7.706a.25.25 0 0 1-.026.376 5.57 5.57 0 0 1-3.867 1.156 5.57 5.57 0 0 1-3.674-1.67Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Ban;
