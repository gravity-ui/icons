import * as React from 'react';
import type {SVGProps} from 'react';
const FloppyDisk = (props: SVGProps<SVGSVGElement>) => (
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
            d="M4.5 14.25h7a2.65 2.65 0 0 0 1.945-.805 2.65 2.65 0 0 0 .805-1.945V6.036q0-.932-.659-1.591l-2.036-2.036q-.659-.66-1.591-.659H4.5a2.65 2.65 0 0 0-1.945.805A2.65 2.65 0 0 0 1.75 4.5v7q0 1.14.805 1.945a2.65 2.65 0 0 0 1.945.805Zm0-1q-.725 0-1.237-.513A1.7 1.7 0 0 1 2.75 11.5v-7q0-.725.513-1.237A1.7 1.7 0 0 1 4.5 2.75q.25 0 .25.25v1q0 .725.513 1.237.512.513 1.237.513h3a.48.48 0 0 0 .354-.146A.48.48 0 0 0 10 5.25a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146h-3a.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53V3q0-.25.25-.25h3.964q.518 0 .885.366l2.035 2.035q.366.367.366.885V11.5q0 .725-.513 1.237a1.7 1.7 0 0 1-1.237.513q-.25 0-.25-.25v-2.5q0-.725-.513-1.237A1.7 1.7 0 0 0 9.5 8.75h-3q-.725 0-1.237.513A1.7 1.7 0 0 0 4.75 10.5V13q0 .25-.25.25Zm5.75-.25q0 .25-.25.25H6q-.25 0-.25-.25v-2.5q0-.31.22-.53a.72.72 0 0 1 .53-.22h3q.31 0 .53.22t.22.53z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default FloppyDisk;
