import * as React from 'react';
import type {SVGProps} from 'react';
const ChevronDownWide = (props: SVGProps<SVGSVGElement>) => (
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
            d="M2.392 6.011a.48.48 0 0 0-.314.22.48.48 0 0 0-.067.377q.046.203.22.314l5.5 3.5q.27.171.538 0l5.5-3.5a.48.48 0 0 0 .219-.313.48.48 0 0 0-.066-.377.48.48 0 0 0-.314-.22.48.48 0 0 0-.377.066L8.134 9.322a.23.23 0 0 1-.268 0L2.769 6.078a.48.48 0 0 0-.377-.067Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ChevronDownWide;
