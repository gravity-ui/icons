import * as React from 'react';
import type {SVGProps} from 'react';
const LayoutRows = (props: SVGProps<SVGSVGElement>) => (
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
            d="M4 2.25a2.65 2.65 0 0 0-1.945.805A2.65 2.65 0 0 0 1.25 5v6q0 1.14.805 1.945A2.65 2.65 0 0 0 4 13.75h8a2.65 2.65 0 0 0 1.945-.805A2.65 2.65 0 0 0 14.75 11V5a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 12 2.25zm8 1q.725 0 1.237.513.513.512.513 1.237v2.25q0 .25-.25.25h-11q-.25 0-.25-.25V5q0-.725.513-1.237A1.7 1.7 0 0 1 4 3.25zM2.25 11V8.75q0-.25.25-.25h11a.24.24 0 0 1 .177.073.24.24 0 0 1 .073.177V11q0 .725-.513 1.237A1.7 1.7 0 0 1 12 12.75H4q-.725 0-1.237-.513A1.7 1.7 0 0 1 2.25 11Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default LayoutRows;
