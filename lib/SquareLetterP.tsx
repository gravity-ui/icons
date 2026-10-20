import * as React from 'react';
import type {SVGProps} from 'react';
const SquareLetterP = (props: SVGProps<SVGSVGElement>) => (
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
            d="M2.555 2.555A2.65 2.65 0 0 0 1.75 4.5v7q0 1.14.805 1.945a2.65 2.65 0 0 0 1.945.805h7a2.65 2.65 0 0 0 1.945-.805 2.65 2.65 0 0 0 .805-1.945v-7a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 11.5 1.75h-7a2.65 2.65 0 0 0-1.945.805Zm8.945.195q.725 0 1.237.513.513.512.513 1.237v7q0 .725-.513 1.237a1.7 1.7 0 0 1-1.237.513h-7q-.725 0-1.237-.513A1.7 1.7 0 0 1 2.75 11.5v-7q0-.725.513-1.237A1.7 1.7 0 0 1 4.5 2.75zm-5.25 2.5v5.5q0 .207.146.354a.48.48 0 0 0 .354.146.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354V9.5q0-.25.25-.25h.75q.931 0 1.59-.66.66-.659.66-1.59t-.66-1.59q-.659-.66-1.59-.66h-1.5a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354Zm1.25 3q-.25 0-.25-.25V6q0-.25.25-.25h.75q.518 0 .884.366T9.5 7t-.366.884a1.2 1.2 0 0 1-.884.366z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default SquareLetterP;
