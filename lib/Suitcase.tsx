import * as React from 'react';
import type {SVGProps} from 'react';
const Suitcase = (props: SVGProps<SVGSVGElement>) => (
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
            d="M5.177 3.177A.24.24 0 0 1 5 3.25a2.65 2.65 0 0 0-1.945.805A2.65 2.65 0 0 0 2.25 6v6q0 1.14.805 1.945A2.65 2.65 0 0 0 5 14.75h6a2.65 2.65 0 0 0 1.945-.805A2.65 2.65 0 0 0 13.75 12V6a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 11 3.25q-.25 0-.25-.25V2q0-.725-.513-1.237A1.7 1.7 0 0 0 9 .25H7q-.725 0-1.237.513A1.7 1.7 0 0 0 5.25 2v1a.24.24 0 0 1-.073.177ZM7 1.25h2q.31 0 .53.22t.22.53v1a.24.24 0 0 1-.073.177.24.24 0 0 1-.177.073h-3q-.25 0-.25-.25V2q0-.31.22-.53A.72.72 0 0 1 7 1.25Zm4 3q.725 0 1.237.513.513.512.513 1.237v6q0 .725-.513 1.237A1.7 1.7 0 0 1 11 13.75H5q-.725 0-1.237-.513A1.7 1.7 0 0 1 3.25 12V6q0-.725.513-1.237A1.7 1.7 0 0 1 5 4.25zm-5.75 2.5q0 .207.146.354a.48.48 0 0 0 .354.146h4.5a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146h-4.5a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Suitcase;
