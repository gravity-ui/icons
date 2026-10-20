import * as React from 'react';
import type {SVGProps} from 'react';
const MinusShape = (props: SVGProps<SVGSVGElement>) => (
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
            d="M2.75 10.75h10.5q.621 0 1.06-.44.44-.438.44-1.06v-2.5q0-.62-.44-1.06a1.45 1.45 0 0 0-1.06-.44H2.75q-.62 0-1.06.44t-.44 1.06v2.5q0 .621.44 1.06.439.44 1.06.44Zm10.5-1H2.75a.48.48 0 0 1-.354-.146.48.48 0 0 1-.146-.354v-2.5q0-.207.146-.354a.48.48 0 0 1 .354-.146h10.5q.207 0 .354.146a.48.48 0 0 1 .146.354v2.5a.48.48 0 0 1-.146.354.48.48 0 0 1-.354.146Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default MinusShape;
