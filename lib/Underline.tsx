import * as React from 'react';
import type {SVGProps} from 'react';
const Underline = (props: SVGProps<SVGSVGElement>) => (
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
            d="M4.25 2.25a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354V7q0 1.76 1.245 3.005T8 11.25t3.005-1.245T12.25 7V2.75a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354V7q0 1.346-.952 2.298T8 10.25a3.13 3.13 0 0 1-2.298-.952A3.13 3.13 0 0 1 4.75 7V2.75a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146Zm-.5 11q0 .207.146.354a.48.48 0 0 0 .354.146h7.5a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146h-7.5a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Underline;
