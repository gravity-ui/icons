import * as React from 'react';
import type {SVGProps} from 'react';
const ChevronDown = (props: SVGProps<SVGSVGElement>) => (
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
            d="M3.853 5.647A.48.48 0 0 0 3.5 5.5a.48.48 0 0 0-.353.146A.48.48 0 0 0 3 6q0 .207.146.353l4.5 4.5A.48.48 0 0 0 8 11a.48.48 0 0 0 .353-.146l4.5-4.5.007-.006a.48.48 0 0 0 .159-.357.48.48 0 0 0-.147-.362.48.48 0 0 0-.362-.147.48.48 0 0 0-.363.166l-3.97 3.97q-.177.177-.354 0z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ChevronDown;
