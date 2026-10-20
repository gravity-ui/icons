import * as React from 'react';
import type {SVGProps} from 'react';
const CaretDown = (props: SVGProps<SVGSVGElement>) => (
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
            d="M4.295 6.03a.45.45 0 0 0 .072.512l3.024 3.509q.226.26.568.26h.084a.72.72 0 0 0 .568-.26l3.023-3.51a.445.445 0 0 0 .071-.51.45.45 0 0 0-.435-.281H4.729a.445.445 0 0 0-.434.28Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default CaretDown;
