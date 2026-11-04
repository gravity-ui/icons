import * as React from 'react';
import type {SVGProps} from 'react';
const ArrowChevronRight = (props: SVGProps<SVGSVGElement>) => (
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
            d="M9.481 12.01a.48.48 0 0 0 .147.362q.15.15.362.147a.48.48 0 0 0 .363-.166l4-4A.48.48 0 0 0 14.5 8a.48.48 0 0 0-.146-.353l-4-4-.006-.007a.48.48 0 0 0-.357-.159.48.48 0 0 0-.362.147q-.15.15-.147.362a.48.48 0 0 0 .166.363l3.47 3.47q.177.177 0 .354l-3.47 3.47-.007.006a.48.48 0 0 0-.159.357Zm-4.33-7.653 2.716 2.716a.24.24 0 0 1 .073.177.24.24 0 0 1-.073.177.24.24 0 0 1-.177.073H2a.48.48 0 0 0-.354.146A.48.48 0 0 0 1.5 8q0 .207.146.354A.48.48 0 0 0 2 8.5h5.69a.24.24 0 0 1 .177.073q.177.177 0 .354l-2.72 2.72-.007.006a.48.48 0 0 0-.159.357.48.48 0 0 0 .147.362q.15.15.362.147a.48.48 0 0 0 .363-.166l4-4A.48.48 0 0 0 10 8a.48.48 0 0 0-.146-.353L5.857 3.65h-.001a.48.48 0 0 0-.346-.131.48.48 0 0 0-.345.146.48.48 0 0 0-.146.345.48.48 0 0 0 .13.346z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ArrowChevronRight;
