import * as React from 'react';
import type {SVGProps} from 'react';
const Display = (props: SVGProps<SVGSVGElement>) => (
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
            d="M2.055 2.555A2.65 2.65 0 0 0 1.25 4.5v4q0 1.14.805 1.945A2.65 2.65 0 0 0 4 11.25h3.25q.25 0 .25.25V13q0 .25-.25.25h-2.5a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354q0 .207.146.354a.48.48 0 0 0 .354.146h6.5a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146h-2.5q-.25 0-.25-.25v-1.5q0-.25.25-.25H12a2.65 2.65 0 0 0 1.945-.805A2.65 2.65 0 0 0 14.75 8.5v-4a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 12 1.75H4a2.65 2.65 0 0 0-1.945.805ZM4 2.75h8q.725 0 1.237.513.513.512.513 1.237v4q0 .725-.513 1.237A1.7 1.7 0 0 1 12 10.25H4q-.725 0-1.237-.513A1.7 1.7 0 0 1 2.25 8.5v-4q0-.725.513-1.237A1.7 1.7 0 0 1 4 2.75Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Display;
