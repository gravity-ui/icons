import * as React from 'react';
import type {SVGProps} from 'react';
const ForwardStep = (props: SVGProps<SVGSVGElement>) => (
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
            d="m1.75 12.233.005.12v.001q.059.813.781 1.204.723.392 1.434-.003l.103-.062 6.494-4.237q.68-.444.68-1.256t-.68-1.256L4.07 2.504q-.722-.47-1.49-.085-.765.384-.825 1.226l-.005.12zm12.5-9.483a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354v10.5q0 .207.146.354a.48.48 0 0 0 .354.146.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354zM3.524 12.657a.47.47 0 0 1-.513.021.47.47 0 0 1-.261-.44V3.76q.001-.298.263-.44a.47.47 0 0 1 .511.023l6.497 4.239a.47.47 0 0 1 .227.419q0 .27-.228.419z"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ForwardStep;
