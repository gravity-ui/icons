import * as React from 'react';
import type {SVGProps} from 'react';
const Heading1 = (props: SVGProps<SVGSVGElement>) => (
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
            d="M11.336 6.62v-.001l.998-.886a.24.24 0 0 1 .166-.063q.25 0 .25.25v5.83q0 .207.146.354a.48.48 0 0 0 .354.146.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354v-7.5a.46.46 0 0 0-.295-.455.46.46 0 0 0-.537.082l-2.246 1.996v.001a.48.48 0 0 0-.15.337.48.48 0 0 0 .127.351q.133.15.334.167.198.015.352-.109zM1.75 3.75a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354v7.496q0 .207.146.354a.48.48 0 0 0 .354.146.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354V8.75q0-.25.25-.25h4q.25 0 .25.25v2.996q0 .207.146.354a.48.48 0 0 0 .354.146.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354V4.25a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354v3q0 .25-.25.25h-4q-.25 0-.25-.25v-3a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Heading1;
