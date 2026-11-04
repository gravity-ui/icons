import * as React from 'react';
import type {SVGProps} from 'react';
const SquareExclamation = (props: SVGProps<SVGSVGElement>) => (
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
            d="M2.555 2.555A2.65 2.65 0 0 0 1.75 4.5v7q0 1.14.805 1.945a2.65 2.65 0 0 0 1.945.805h7a2.65 2.65 0 0 0 1.945-.805 2.65 2.65 0 0 0 .805-1.945v-7a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 11.5 1.75h-7a2.65 2.65 0 0 0-1.945.805ZM4.5 2.75h7q.725 0 1.237.513.513.512.513 1.237v7q0 .725-.513 1.237a1.7 1.7 0 0 1-1.237.513h-7q-.725 0-1.237-.513A1.7 1.7 0 0 1 2.75 11.5v-7q0-.725.513-1.237A1.7 1.7 0 0 1 4.5 2.75ZM8 4.5a.48.48 0 0 0-.354.146A.48.48 0 0 0 7.5 5v2.5q0 .207.146.354A.48.48 0 0 0 8 8a.48.48 0 0 0 .354-.146A.48.48 0 0 0 8.5 7.5V5a.48.48 0 0 0-.146-.354A.48.48 0 0 0 8 4.5Zm0 6.75a.72.72 0 0 0 .53-.22.72.72 0 0 0 .22-.53.72.72 0 0 0-.22-.53.72.72 0 0 0-.53-.22.72.72 0 0 0-.53.22.72.72 0 0 0-.22.53q0 .31.22.53t.53.22Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default SquareExclamation;
