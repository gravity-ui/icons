import * as React from 'react';
import type {SVGProps} from 'react';
const ToggleOn = (props: SVGProps<SVGSVGElement>) => (
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
            d="M5.5 2.75q-1.002 0-1.932.369a5.2 5.2 0 0 0-1.78 1.169 5.2 5.2 0 0 0-1.17 1.78A5.2 5.2 0 0 0 .25 8q0 1.002.369 1.932a5.2 5.2 0 0 0 1.169 1.78 5.2 5.2 0 0 0 1.78 1.17q.93.368 1.932.368h5q1.002 0 1.932-.369a5.2 5.2 0 0 0 1.78-1.169 5.2 5.2 0 0 0 1.17-1.78q.368-.93.368-1.932t-.369-1.932a5.2 5.2 0 0 0-1.169-1.78 5.2 5.2 0 0 0-1.78-1.17A5.2 5.2 0 0 0 10.5 2.75zm5 9.5q-1.76 0-3.005-1.245T6.25 8t1.245-3.005T10.5 3.75t3.005 1.245T14.75 8t-1.245 3.005Q12.261 12.25 10.5 12.25Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ToggleOn;
