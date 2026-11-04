import * as React from 'react';
import type {SVGProps} from 'react';
const ChartPie = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8 14.75a6.7 6.7 0 0 0 2.485-.474 6.7 6.7 0 0 0 2.288-1.503 6.7 6.7 0 0 0 1.503-2.288A6.7 6.7 0 0 0 14.75 8a6.7 6.7 0 0 0-.474-2.485 6.7 6.7 0 0 0-1.503-2.288 6.7 6.7 0 0 0-2.288-1.503A6.7 6.7 0 0 0 8 1.25a6.7 6.7 0 0 0-2.485.474 6.7 6.7 0 0 0-2.288 1.503 6.7 6.7 0 0 0-1.503 2.288A6.7 6.7 0 0 0 1.25 8q0 1.288.474 2.485a6.7 6.7 0 0 0 1.503 2.288 6.7 6.7 0 0 0 2.288 1.503A6.7 6.7 0 0 0 8 14.75Zm.75-7.25q-.25 0-.25-.25v-4.7l.002-.034q.035-.247.282-.214a5.6 5.6 0 0 1 3.283 1.63A5.6 5.6 0 0 1 13.7 7.25q0 .25-.25.25zm-1.012 6.245q-2.228-.102-3.804-1.679T2.255 8.262Q2.154 6.035 3.58 4.32q1.426-1.713 3.636-2.018L7.25 2.3q.25 0 .25.25V8q0 .207.147.353A.48.48 0 0 0 8 8.5h5.45l.034.002q.247.035.214.282-.305 2.21-2.018 3.636-1.715 1.425-3.942 1.325Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ChartPie;
