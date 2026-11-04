import * as React from 'react';
import type {SVGProps} from 'react';
const Play = (props: SVGProps<SVGSVGElement>) => (
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
            d="m2.75 13.464.005.135q.068.965.932 1.419.87.457 1.714-.05l9.112-5.467q.85-.51.85-1.501t-.85-1.5L5.401 1.031Q4.557.526 3.687.982q-.864.455-.932 1.42l-.005.134zM14 8.644 4.886 14.11a.7.7 0 0 1-.756.01.7.7 0 0 1-.38-.653V2.532q.001-.436.38-.651a.7.7 0 0 1 .754.008L14 7.358q.363.218.363.643a.7.7 0 0 1-.363.642Z"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Play;
