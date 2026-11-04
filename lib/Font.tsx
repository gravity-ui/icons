import * as React from 'react';
import type {SVGProps} from 'react';
const Font = (props: SVGProps<SVGSVGElement>) => (
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
            d="m6.863 3.307-3.335 9.528a.48.48 0 0 0 .021.382q.09.187.286.255.195.069.382-.021a.48.48 0 0 0 .255-.286l1.137-3.248a.23.23 0 0 1 .236-.167h4.31a.23.23 0 0 1 .236.167l1.137 3.248q.068.195.255.285t.382.021a.48.48 0 0 0 .285-.255.48.48 0 0 0 .022-.381L9.137 3.307a1.18 1.18 0 0 0-.44-.585A1.18 1.18 0 0 0 8 2.5q-.384 0-.697.222a1.18 1.18 0 0 0-.44.584Zm1.373.452 1.63 4.658a.24.24 0 0 1-.01.191.25.25 0 0 1-.225.142H6.369q-.25 0-.25-.25 0-.042.014-.083l1.63-4.658a.24.24 0 0 1 .128-.142.24.24 0 0 1 .19-.011.24.24 0 0 1 .154.153Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Font;
