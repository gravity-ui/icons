import * as React from 'react';
import type {SVGProps} from 'react';
const Lock = (props: SVGProps<SVGSVGElement>) => (
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
            d="M4.25 6q0 .25-.25.25a2.65 2.65 0 0 0-1.945.805A2.65 2.65 0 0 0 1.25 9v3q0 1.14.805 1.945A2.65 2.65 0 0 0 4 14.75h8a2.65 2.65 0 0 0 1.945-.805A2.65 2.65 0 0 0 14.75 12V9a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 12 6.25q-.25 0-.25-.25V5q0-1.554-1.098-2.652A3.6 3.6 0 0 0 8 1.25q-1.554 0-2.652 1.098A3.6 3.6 0 0 0 4.25 5zm6.5-1v1q0 .25-.25.25h-5q-.25 0-.25-.25V5q0-1.14.805-1.945A2.65 2.65 0 0 1 8 2.25q1.14 0 1.945.805A2.65 2.65 0 0 1 10.75 5ZM12 7.25q.725 0 1.237.513.513.512.513 1.237v3q0 .725-.513 1.237A1.7 1.7 0 0 1 12 13.75H4q-.725 0-1.237-.513A1.7 1.7 0 0 1 2.25 12V9q0-.725.513-1.237A1.7 1.7 0 0 1 4 7.25zM8 9a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354v2q0 .207.146.354A.48.48 0 0 0 8 12a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354v-2a.48.48 0 0 0-.146-.354A.48.48 0 0 0 8 9Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Lock;
