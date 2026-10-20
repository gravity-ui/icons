import * as React from 'react';
import type {SVGProps} from 'react';
const ObjectAlignBottom = (props: SVGProps<SVGSVGElement>) => (
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
            d="M7 10.75h2q.932 0 1.591-.659.66-.66.659-1.591V4q0-.932-.659-1.591-.66-.66-1.591-.659H7q-.932 0-1.591.659-.66.66-.659 1.591v4.5q0 .932.659 1.591.66.66 1.591.659Zm2-1H7q-.518 0-.884-.366A1.2 1.2 0 0 1 5.75 8.5V4q0-.518.366-.884T7 2.75h2q.518 0 .884.366T10.25 4v4.5q0 .518-.366.884A1.2 1.2 0 0 1 9 9.75Zm-7.75 3.5q0 .207.146.354a.48.48 0 0 0 .354.146h12.5a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146H1.75a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ObjectAlignBottom;
