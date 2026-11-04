import * as React from 'react';
import type {SVGProps} from 'react';
const LayoutSplitRows = (props: SVGProps<SVGSVGElement>) => (
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
            d="M14.75 4q0-.932-.659-1.591-.66-.66-1.591-.659h-9q-.932 0-1.591.659-.66.66-.659 1.591v1q0 .932.659 1.591.66.66 1.591.659h9q.932 0 1.591-.659.66-.66.659-1.591zm-1 1q0 .518-.366.884a1.2 1.2 0 0 1-.884.366h-9q-.518 0-.884-.366A1.2 1.2 0 0 1 2.25 5V4q0-.518.366-.884T3.5 2.75h9q.518 0 .884.366T13.75 4zm1 6q0-.932-.659-1.591-.66-.66-1.591-.659h-9q-.932 0-1.591.659-.66.66-.659 1.591v1q0 .932.659 1.591.66.66 1.591.659h9q.932 0 1.591-.659.66-.66.659-1.591zm-1 1q0 .518-.366.884a1.2 1.2 0 0 1-.884.366h-9q-.518 0-.884-.366A1.2 1.2 0 0 1 2.25 12v-1q0-.518.366-.884T3.5 9.75h9q.518 0 .884.366t.366.884z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default LayoutSplitRows;
