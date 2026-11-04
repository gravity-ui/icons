import * as React from 'react';
import type {SVGProps} from 'react';
const Tag = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8.259 1.25q-1.155 0-1.963.823L1.428 7.034Q.775 7.7.784 8.631t.673 1.585l4.45 4.37q.66.648 1.587.645a2.17 2.17 0 0 0 1.58-.659l4.87-4.87a2.65 2.65 0 0 0 .806-1.945V3.5q0-.932-.659-1.591-.66-.66-1.591-.659zm.109 12.615a1.2 1.2 0 0 1-.879.366 1.2 1.2 0 0 1-.881-.359l-4.45-4.37a1.2 1.2 0 0 1-.374-.88q-.004-.518.359-.887l4.867-4.96q.515-.525 1.249-.525H12.5q.518 0 .884.366t.366.884v4.257q0 .726-.513 1.238zm1.425-7.908a.96.96 0 0 0 .707.293.96.96 0 0 0 .707-.293.96.96 0 0 0 .293-.707.96.96 0 0 0-.293-.707.96.96 0 0 0-.707-.293.96.96 0 0 0-.707.293.96.96 0 0 0-.293.707q0 .414.293.707Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Tag;
