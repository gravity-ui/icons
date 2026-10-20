import * as React from 'react';
import type {SVGProps} from 'react';
const ObjectAlignJustifyVertical = (props: SVGProps<SVGSVGElement>) => (
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
            d="M1.25 1.75q0 .207.146.354a.48.48 0 0 0 .354.146h12.5a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146H1.75a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354Zm10 8.25V6q0-.932-.659-1.591-.66-.66-1.591-.659H7q-.932 0-1.591.659-.66.66-.659 1.591v4q0 .932.659 1.591.66.66 1.591.659h2q.932 0 1.591-.659.66-.66.659-1.591ZM9 11.25H7q-.518 0-.884-.366A1.2 1.2 0 0 1 5.75 10V6q0-.518.366-.884T7 4.75h2q.518 0 .884.366T10.25 6v4q0 .518-.366.884A1.2 1.2 0 0 1 9 11.25Zm-7.25 2.5a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354q0 .207.146.354a.48.48 0 0 0 .354.146h12.5a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ObjectAlignJustifyVertical;
