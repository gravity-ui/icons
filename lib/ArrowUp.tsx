import * as React from 'react';
import type {SVGProps} from 'react';
const ArrowUp = (props: SVGProps<SVGSVGElement>) => (
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
            d="M7.646 14.354A.48.48 0 0 0 8 14.5a.48.48 0 0 0 .354-.146A.48.48 0 0 0 8.5 14V3.81q0-.25.25-.25a.24.24 0 0 1 .177.073l2.716 2.717h.001q.147.135.346.131a.48.48 0 0 0 .345-.146.48.48 0 0 0 .146-.345.48.48 0 0 0-.13-.346h-.001L8.353 1.646A.48.48 0 0 0 8 1.5a.48.48 0 0 0-.353.146L3.65 5.643v.001a.48.48 0 0 0-.131.346q.003.203.146.345.143.143.345.146a.48.48 0 0 0 .346-.13V6.35l2.717-2.717q.177-.177.354 0a.24.24 0 0 1 .073.177V14q0 .207.146.354Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ArrowUp;
