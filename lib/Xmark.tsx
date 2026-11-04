import * as React from 'react';
import type {SVGProps} from 'react';
const Xmark = (props: SVGProps<SVGSVGElement>) => (
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
            d="M4.353 3.647A.48.48 0 0 0 4 3.5a.48.48 0 0 0-.353.146A.48.48 0 0 0 3.5 4q0 .207.146.353l3.47 3.47q.177.177 0 .354L3.65 11.643v.001a.48.48 0 0 0-.131.346q.002.203.146.345.143.143.345.146a.48.48 0 0 0 .346-.13v-.001l3.467-3.467q.177-.177.354 0l3.47 3.47.006.007a.48.48 0 0 0 .357.159.48.48 0 0 0 .362-.147q.15-.15.147-.362a.48.48 0 0 0-.166-.363l-3.47-3.47q-.177-.177 0-.354l3.47-3.47.007-.006a.48.48 0 0 0 .159-.357.48.48 0 0 0-.147-.362.48.48 0 0 0-.362-.147.48.48 0 0 0-.363.166l-3.47 3.47q-.177.177-.354 0z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Xmark;
