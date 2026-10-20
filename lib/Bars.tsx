import * as React from 'react';
import type {SVGProps} from 'react';
const Bars = (props: SVGProps<SVGSVGElement>) => (
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
            d="M2 2.75a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354q0 .207.146.354A.48.48 0 0 0 2 3.75h12a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354A.48.48 0 0 0 14 2.75zM2 7.5a.48.48 0 0 0-.354.146A.48.48 0 0 0 1.5 8q0 .207.146.354A.48.48 0 0 0 2 8.5h12a.48.48 0 0 0 .354-.146A.48.48 0 0 0 14.5 8a.48.48 0 0 0-.146-.354A.48.48 0 0 0 14 7.5zm-.5 5.25q0 .207.146.354A.48.48 0 0 0 2 13.25h12a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146H2a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Bars;
