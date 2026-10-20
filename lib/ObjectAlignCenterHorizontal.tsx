import * as React from 'react';
import type {SVGProps} from 'react';
const ObjectAlignCenterHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
            d="M14.25 7q0-.932-.659-1.591-.66-.66-1.591-.659H8.75q-.25 0-.25-.25V1.75a.48.48 0 0 0-.146-.354A.48.48 0 0 0 8 1.25a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354V4.5q0 .25-.25.25H4q-.932 0-1.591.659-.66.66-.659 1.591v2q0 .932.659 1.591.66.66 1.591.659h3.25q.25 0 .25.25v2.75q0 .207.146.354A.48.48 0 0 0 8 14.75a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354V11.5q0-.25.25-.25H12q.932 0 1.591-.659.66-.66.659-1.591zm-1 2q0 .518-.366.884a1.2 1.2 0 0 1-.884.366H4q-.518 0-.884-.366A1.2 1.2 0 0 1 2.75 9V7q0-.518.366-.884T4 5.75h8q.518 0 .884.366T13.25 7z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ObjectAlignCenterHorizontal;
