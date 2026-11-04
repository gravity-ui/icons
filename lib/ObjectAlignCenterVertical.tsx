import * as React from 'react';
import type {SVGProps} from 'react';
const ObjectAlignCenterVertical = (props: SVGProps<SVGSVGElement>) => (
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
            d="M5.409 2.409q-.66.66-.659 1.591v3.25q0 .25-.25.25H1.75a.48.48 0 0 0-.354.146A.48.48 0 0 0 1.25 8q0 .207.146.354a.48.48 0 0 0 .354.146H4.5q.25 0 .25.25V12q0 .932.659 1.591.66.66 1.591.659h2q.932 0 1.591-.659.66-.66.659-1.591V8.75q0-.25.25-.25h2.75a.48.48 0 0 0 .354-.146A.48.48 0 0 0 14.75 8a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146H11.5q-.25 0-.25-.25V4q0-.932-.659-1.591-.66-.66-1.591-.659H7q-.932 0-1.591.659ZM9 2.75q.518 0 .884.366T10.25 4v8q0 .518-.366.884A1.2 1.2 0 0 1 9 13.25H7q-.518 0-.884-.366A1.2 1.2 0 0 1 5.75 12V4q0-.518.366-.884T7 2.75z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ObjectAlignCenterVertical;
