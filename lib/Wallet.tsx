import * as React from 'react';
import type {SVGProps} from 'react';
const Wallet = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <g
            fill="currentColor"
            fillRule="evenodd"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth={0.5}
        >
            <path
                d="M11.253 8.755a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146h-1a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354q0 .207.146.354a.48.48 0 0 0 .354.146h1a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354Z"
                style={{
                    strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
                }}
            />
            <path
                d="M13.25 2.25a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146H3.195q-.807 0-1.377.571-.57.57-.571 1.379v8.049q0 1.035.732 1.768a2.4 2.4 0 0 0 1.768.732h8.51q1.035 0 1.768-.732a2.4 2.4 0 0 0 .732-1.768v-4.5q0-1.035-.732-1.768a2.4 2.4 0 0 0-1.768-.732h-8.96q-.405 0-.703-.27a1.02 1.02 0 0 1-.343-.686l-.004-.08V3.7q0-.393.277-.67a.92.92 0 0 1 .67-.28h9.556a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354Zm-9.503 11q-.621 0-1.06-.44a1.45 1.45 0 0 1-.44-1.06V5.854q0-.25.25-.25.044 0 .086.015.356.13.714.131h8.96q.621 0 1.06.44.44.438.44 1.06v4.5q0 .621-.439 1.06-.44.44-1.061.44z"
                clipRule="evenodd"
                style={{
                    strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
                }}
            />
        </g>
    </svg>
);
export default Wallet;
