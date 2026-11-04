import * as React from 'react';
import type {SVGProps} from 'react';
const ArrowShapeRightToLine = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.75 14.25q0 .207.146.354a.48.48 0 0 0 .354.146.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354V1.75a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354zm-2.682-4.81q.68-.558.682-1.438v-.003q0-.882-.682-1.438l-4.32-3.534a1.2 1.2 0 0 0-.626-.267 1.2 1.2 0 0 0-.672.109 1.2 1.2 0 0 0-.51.451 1.2 1.2 0 0 0-.19.654V5q0 .25-.25.25H2.75q-.62 0-1.06.44t-.44 1.06v2.5q0 .621.44 1.06.439.44 1.06.44H4.5q.25 0 .25.25v1.027q0 .354.19.654.189.3.51.451a1.2 1.2 0 0 0 .672.109 1.2 1.2 0 0 0 .627-.268zM5.75 11.97V9.75h-3a.48.48 0 0 1-.354-.146.48.48 0 0 1-.146-.354v-2.5q0-.207.146-.354a.48.48 0 0 1 .354-.146h3V4.029a.24.24 0 0 1 .073-.177A.24.24 0 0 1 6 3.78q.09 0 .158.057l4.276 3.499A.82.82 0 0 1 10.75 8a.82.82 0 0 1-.316.665l-4.276 3.5a.24.24 0 0 1-.183.055.24.24 0 0 1-.168-.09.24.24 0 0 1-.057-.159Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ArrowShapeRightToLine;
