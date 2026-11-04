import * as React from 'react';
import type {SVGProps} from 'react';
const ArrowShapeRightFromLine = (props: SVGProps<SVGSVGElement>) => (
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
            d="M1.75 14.75a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354V1.75a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354v12.5q0 .207.146.354a.48.48 0 0 0 .354.146Zm2.5-8v2.501q0 .62.44 1.06t1.06.439H7.5q.25 0 .25.25v1.026q0 .354.19.654.189.3.51.451a1.2 1.2 0 0 0 .672.109 1.2 1.2 0 0 0 .627-.268l4.319-3.532q.681-.559.682-1.44 0-.881-.682-1.44l-4.32-3.533a1.2 1.2 0 0 0-.626-.268 1.2 1.2 0 0 0-.672.109 1.2 1.2 0 0 0-.51.451 1.2 1.2 0 0 0-.19.654V5q0 .25-.25.25H5.75q-.621 0-1.06.44-.44.438-.44 1.06Zm4.5 5.221V9.75h-3a.48.48 0 0 1-.354-.146.48.48 0 0 1-.146-.354v-2.5q0-.207.146-.354a.48.48 0 0 1 .354-.146h3V4.029a.24.24 0 0 1 .073-.177A.24.24 0 0 1 9 3.78q.09 0 .158.057l4.276 3.499A.82.82 0 0 1 13.75 8a.82.82 0 0 1-.316.665l-4.276 3.5q-.194.157-.351-.036a.24.24 0 0 1-.057-.158Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ArrowShapeRightFromLine;
