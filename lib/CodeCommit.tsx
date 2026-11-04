import * as React from 'react';
import type {SVGProps} from 'react';
const CodeCommit = (props: SVGProps<SVGSVGElement>) => (
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
            d="M7.5 4.07q0 .207-.203.246-1.326.253-2.187 1.293A3.64 3.64 0 0 0 4.25 8q0 1.35.86 2.39a3.64 3.64 0 0 0 2.187 1.294q.203.039.203.246v2.32q0 .207.146.354A.48.48 0 0 0 8 14.75a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354v-2.32q0-.207.203-.246a3.64 3.64 0 0 0 2.187-1.293q.86-1.04.86-2.391t-.86-2.39a3.64 3.64 0 0 0-2.187-1.294Q8.5 4.277 8.5 4.07V1.75a.48.48 0 0 0-.146-.354A.48.48 0 0 0 8 1.25a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354zm2.445 5.875A2.65 2.65 0 0 1 8 10.75a2.65 2.65 0 0 1-1.945-.805A2.65 2.65 0 0 1 5.25 8q0-1.14.805-1.945A2.65 2.65 0 0 1 8 5.25q1.14 0 1.945.805A2.65 2.65 0 0 1 10.75 8a2.65 2.65 0 0 1-.805 1.945Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default CodeCommit;
