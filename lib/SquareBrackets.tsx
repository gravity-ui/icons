import * as React from 'react';
import type {SVGProps} from 'react';
const SquareBrackets = (props: SVGProps<SVGSVGElement>) => (
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
            d="M2.336 1.836q-.585.586-.586 1.414v9.5q0 .829.586 1.414.586.586 1.414.586h.5a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146h-.5a.96.96 0 0 1-.707-.293.96.96 0 0 1-.293-.707v-9.5q0-.414.293-.707a.96.96 0 0 1 .707-.293h.5a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146h-.5q-.828 0-1.414.586ZM14.25 12.75v-9.5q0-.828-.586-1.414a1.93 1.93 0 0 0-1.414-.586h-.5a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354q0 .207.146.354a.48.48 0 0 0 .354.146h.5q.414 0 .707.293a.96.96 0 0 1 .293.707v9.5a.96.96 0 0 1-.293.707.96.96 0 0 1-.707.293h-.5a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354q0 .207.146.354a.48.48 0 0 0 .354.146h.5q.829 0 1.414-.586.586-.585.586-1.414Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default SquareBrackets;
