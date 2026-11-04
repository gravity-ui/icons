import * as React from 'react';
import type {SVGProps} from 'react';
const Briefcase = (props: SVGProps<SVGSVGElement>) => (
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
            d="M5.25 4q0 .25-.25.25H4a2.65 2.65 0 0 0-1.945.805A2.65 2.65 0 0 0 1.25 7v4q0 1.14.805 1.945A2.65 2.65 0 0 0 4 13.75h8a2.65 2.65 0 0 0 1.945-.805A2.65 2.65 0 0 0 14.75 11V7a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 12 4.25h-1q-.25 0-.25-.25V3q0-.725-.513-1.237A1.7 1.7 0 0 0 9 1.25H7q-.725 0-1.237.513A1.7 1.7 0 0 0 5.25 3zM7 2.25h2q.31 0 .53.22t.22.53v1q0 .25-.25.25h-3q-.25 0-.25-.25V3q0-.31.22-.53A.72.72 0 0 1 7 2.25Zm5 3q.725 0 1.237.513.513.512.513 1.237v4q0 .725-.513 1.237A1.7 1.7 0 0 1 12 12.75H4q-.725 0-1.237-.513A1.7 1.7 0 0 1 2.25 11V7q0-.725.513-1.237A1.7 1.7 0 0 1 4 5.25zm-7.75 2.5q0 .207.146.354a.48.48 0 0 0 .354.146h6.5a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146h-6.5a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Briefcase;
