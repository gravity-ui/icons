import * as React from 'react';
import type {SVGProps} from 'react';
const ChevronRight = (props: SVGProps<SVGSVGElement>) => (
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
            d="M5.647 12.147a.48.48 0 0 0-.146.353q0 .207.146.353A.48.48 0 0 0 6 13a.48.48 0 0 0 .353-.146l4.5-4.5A.48.48 0 0 0 11 8a.48.48 0 0 0-.146-.353L6.357 3.15h-.001a.48.48 0 0 0-.346-.131.48.48 0 0 0-.345.146.48.48 0 0 0-.146.345.48.48 0 0 0 .13.346h.001l3.967 3.967q.177.177 0 .354z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ChevronRight;
