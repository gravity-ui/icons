import * as React from 'react';
import type {SVGProps} from 'react';
const ArrowShapeDownFromLine = (props: SVGProps<SVGSVGElement>) => (
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
            d="M1.25 1.75q0 .207.146.354a.48.48 0 0 0 .354.146h12.5a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146H1.75a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354Zm8 2.5H6.749q-.62 0-1.06.44a1.45 1.45 0 0 0-.439 1.06V7.5q0 .25-.25.25H3.974a1.2 1.2 0 0 0-.654.19 1.2 1.2 0 0 0-.451.51 1.2 1.2 0 0 0-.109.672 1.2 1.2 0 0 0 .268.627l3.532 4.319q.559.681 1.44.682.881 0 1.44-.682l3.533-4.32a1.2 1.2 0 0 0 .268-.626 1.2 1.2 0 0 0-.109-.672 1.2 1.2 0 0 0-.451-.51 1.2 1.2 0 0 0-.654-.19H11a.24.24 0 0 1-.177-.073.24.24 0 0 1-.073-.177V5.75q0-.621-.44-1.06a1.45 1.45 0 0 0-1.06-.44Zm-5.221 4.5H6.25v-3q0-.207.146-.354a.48.48 0 0 1 .354-.146h2.5q.207 0 .354.146a.48.48 0 0 1 .146.354v3h2.221a.24.24 0 0 1 .177.073.24.24 0 0 1 .073.177q0 .09-.057.158l-3.499 4.276A.82.82 0 0 1 8 13.75a.82.82 0 0 1-.665-.316l-3.5-4.276q-.157-.194.036-.351a.24.24 0 0 1 .158-.057Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ArrowShapeDownFromLine;
