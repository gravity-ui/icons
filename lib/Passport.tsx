import * as React from 'react';
import type {SVGProps} from 'react';
const Passport = (props: SVGProps<SVGSVGElement>) => (
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
            d="M4 14.75h7a2.65 2.65 0 0 0 1.945-.805A2.65 2.65 0 0 0 13.75 12V4a2.65 2.65 0 0 0-.805-1.945A2.65 2.65 0 0 0 11 1.25H4q-.725 0-1.237.513A1.7 1.7 0 0 0 2.25 3v10q0 .725.513 1.237.512.513 1.237.513ZM3.25 13V3q0-.31.22-.53A.72.72 0 0 1 4 2.25h7q.725 0 1.237.513.513.512.513 1.237v8q0 .725-.513 1.237A1.7 1.7 0 0 1 11 13.75H4a.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53Zm6.341-4.909q.66-.66.659-1.591 0-.932-.659-1.591-.66-.66-1.591-.659-.932 0-1.591.659-.66.66-.659 1.591 0 .932.659 1.591.66.66 1.591.659.932 0 1.591-.659ZM8 7.75q-.518 0-.884-.366A1.2 1.2 0 0 1 6.75 6.5q0-.518.366-.884T8 5.25t.884.366.366.884-.366.884A1.2 1.2 0 0 1 8 7.75Zm-1.75 2.5a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354q0 .207.146.354a.48.48 0 0 0 .354.146h3.5a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Passport;
