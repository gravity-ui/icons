import * as React from 'react';
import type {SVGProps} from 'react';
const CodeCommitHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
            d="M11.93 7.5q-.207 0-.246-.203a3.64 3.64 0 0 0-1.293-2.187A3.64 3.64 0 0 0 8 4.25q-1.35 0-2.39.86a3.64 3.64 0 0 0-1.294 2.187q-.039.203-.246.203H1.75a.48.48 0 0 0-.354.146A.48.48 0 0 0 1.25 8q0 .207.146.354a.48.48 0 0 0 .354.146h2.32q.207 0 .246.203.253 1.326 1.293 2.187T8 11.75t2.39-.86a3.64 3.64 0 0 0 1.294-2.187q.039-.203.246-.203h2.32a.48.48 0 0 0 .354-.146A.48.48 0 0 0 14.75 8a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146zM8 10.75a2.65 2.65 0 0 1-1.945-.805A2.65 2.65 0 0 1 5.25 8q0-1.14.805-1.945A2.65 2.65 0 0 1 8 5.25q1.14 0 1.945.805A2.65 2.65 0 0 1 10.75 8a2.65 2.65 0 0 1-.805 1.945A2.65 2.65 0 0 1 8 10.75Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default CodeCommitHorizontal;
