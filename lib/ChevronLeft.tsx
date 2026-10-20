import * as React from 'react';
import type {SVGProps} from 'react';
const ChevronLeft = (props: SVGProps<SVGSVGElement>) => (
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
            d="M10.353 3.853A.48.48 0 0 0 10.5 3.5a.48.48 0 0 0-.146-.353A.48.48 0 0 0 10 3a.48.48 0 0 0-.353.146l-4.5 4.5A.48.48 0 0 0 5 8q0 .207.146.353l4.5 4.5.006.007a.48.48 0 0 0 .357.159.48.48 0 0 0 .362-.147q.15-.15.147-.362a.48.48 0 0 0-.166-.363l-3.97-3.97q-.177-.177 0-.354z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ChevronLeft;
