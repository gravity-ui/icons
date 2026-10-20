import * as React from 'react';
import type {SVGProps} from 'react';
const AbbrQl = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8.25 8q0-1.855-.897-2.831Q6.51 4.249 5 4.25q-1.509 0-2.353.919Q1.75 6.144 1.75 8t.897 2.831q.844.92 2.353.919.635 0 1.163-.17a.23.23 0 0 1 .254.062l1.46 1.464q.144.15.354.153.21.002.358-.145a.48.48 0 0 0 .148-.358q-.002-.21-.155-.359l-1.22-1.224q-.168-.169-.006-.345Q8.25 9.853 8.25 8Zm3-3.25a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354v6.5q0 .207.146.354a.48.48 0 0 0 .354.146h3.5a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146H11.5q-.25 0-.25-.25zm-4.633 5.404Q6.07 10.75 5 10.75q-1.071 0-1.617-.596Q2.75 9.466 2.75 8t.633-2.154Q3.928 5.25 5 5.25t1.617.596Q7.25 6.534 7.25 8t-.633 2.154Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default AbbrQl;
