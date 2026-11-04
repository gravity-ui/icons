import * as React from 'react';
import type {SVGProps} from 'react';
const TextAlignLeft = (props: SVGProps<SVGSVGElement>) => (
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
            d="M2.25 2.75q0 .207.146.354a.48.48 0 0 0 .354.146h10.5a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146H2.75a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354Zm.5 3a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354q0 .207.146.354a.48.48 0 0 0 .354.146h6.5a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146zm-.5 4q0 .207.146.354a.48.48 0 0 0 .354.146h10.5a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146H2.75a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354Zm0 3.5q0 .207.146.354a.48.48 0 0 0 .354.146h6.5a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146h-6.5a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default TextAlignLeft;
