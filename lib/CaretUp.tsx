import * as React from 'react';
import type {SVGProps} from 'react';
const CaretUp = (props: SVGProps<SVGSVGElement>) => (
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
            d="M11.705 9.97a.45.45 0 0 0-.072-.512L8.61 5.949a.72.72 0 0 0-.568-.26h-.084a.72.72 0 0 0-.568.26L4.366 9.46a.445.445 0 0 0-.071.51q.128.28.435.281h6.541a.445.445 0 0 0 .434-.28Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default CaretUp;
