import * as React from 'react';
import type {SVGProps} from 'react';
const CaretRight = (props: SVGProps<SVGSVGElement>) => (
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
            d="M6.03 11.705a.45.45 0 0 0 .512-.072l3.509-3.024a.72.72 0 0 0 .26-.568v-.084a.72.72 0 0 0-.26-.568L6.54 4.366a.445.445 0 0 0-.51-.071.45.45 0 0 0-.281.435v6.541q0 .306.28.434Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default CaretRight;
