import * as React from 'react';
import type {SVGProps} from 'react';
const ArrowShapeDownToLine = (props: SVGProps<SVGSVGElement>) => (
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
            d="M6.56 11.068q.558.68 1.438.682h.003q.882 0 1.438-.682l3.534-4.32a1.2 1.2 0 0 0 .267-.626 1.2 1.2 0 0 0-.109-.672 1.2 1.2 0 0 0-.451-.51 1.2 1.2 0 0 0-.654-.19H11q-.25 0-.25-.25V2.75q0-.62-.44-1.06a1.45 1.45 0 0 0-1.06-.44h-2.5q-.62 0-1.06.44t-.44 1.06V4.5q0 .25-.25.25H3.973a1.2 1.2 0 0 0-.654.19 1.2 1.2 0 0 0-.451.51 1.2 1.2 0 0 0-.109.672 1.2 1.2 0 0 0 .268.627zM4.03 5.75h2.22v-3q0-.207.146-.354a.48.48 0 0 1 .354-.146h2.5q.207 0 .354.146a.48.48 0 0 1 .146.354v3h2.221a.24.24 0 0 1 .177.073.24.24 0 0 1 .073.177q0 .09-.057.158l-3.499 4.276A.82.82 0 0 1 8 10.75a.82.82 0 0 1-.665-.316l-3.5-4.276q-.157-.194.036-.351a.24.24 0 0 1 .158-.057Zm-2.279 8a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354q0 .207.146.354a.48.48 0 0 0 .354.146h12.5a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ArrowShapeDownToLine;
