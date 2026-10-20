import * as React from 'react';
import type {SVGProps} from 'react';
const CaretLeft = (props: SVGProps<SVGSVGElement>) => (
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
            d="M9.97 4.295a.45.45 0 0 0-.512.072L5.949 7.39a.72.72 0 0 0-.26.568v.084q0 .343.26.568l3.51 3.023a.445.445 0 0 0 .51.071.45.45 0 0 0 .281-.435v-6.54a.445.445 0 0 0-.28-.434Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default CaretLeft;
