import * as React from 'react';
import type {SVGProps} from 'react';
const Book = (props: SVGProps<SVGSVGElement>) => (
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
            d="M2.25 3v10q0 .725.513 1.237.512.513 1.237.513h7a2.65 2.65 0 0 0 1.945-.805A2.65 2.65 0 0 0 13.75 12V4a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 11 1.25H4q-.655 0-1.15.43A1.7 1.7 0 0 0 2.25 3ZM4 10.75a.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53V3q0-.31.22-.53A.72.72 0 0 1 4 2.25h7a1.7 1.7 0 0 1 1.106.393A1.75 1.75 0 0 1 12.75 4v5q0 .725-.513 1.237A1.7 1.7 0 0 1 11 10.75zm2.25-6a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354q0 .207.146.354a.48.48 0 0 0 .354.146h3.5a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146zm-3 8.25v-1.063q0-.25.25-.25.033 0 .063.008.21.055.437.055h7q.737 0 1.375-.368.217-.124.342.092.033.058.033.125V12q0 .725-.513 1.237A1.7 1.7 0 0 1 11 13.75H4a.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Book;
