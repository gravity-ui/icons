import * as React from 'react';
import type {SVGProps} from 'react';
const ArrowChevronUp = (props: SVGProps<SVGSVGElement>) => (
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
            d="m4.357 6.35 3.466-3.467q.177-.177.354 0l3.47 3.47.006.007a.48.48 0 0 0 .357.159.48.48 0 0 0 .362-.147q.15-.15.147-.362a.48.48 0 0 0-.166-.363l-4-4A.48.48 0 0 0 8 1.5a.48.48 0 0 0-.353.146L3.65 5.643v.001a.48.48 0 0 0-.131.346q.003.203.146.345.143.143.345.146a.48.48 0 0 0 .346-.13zM8 14.5a.48.48 0 0 0 .354-.146A.48.48 0 0 0 8.5 14V8.31a.24.24 0 0 1 .073-.177q.177-.177.354 0l2.72 2.72.006.007a.48.48 0 0 0 .357.159.48.48 0 0 0 .362-.147q.15-.15.147-.362a.48.48 0 0 0-.166-.363l-4-4A.48.48 0 0 0 8 6a.48.48 0 0 0-.353.146l-4 4-.007.006a.48.48 0 0 0-.159.357.48.48 0 0 0 .147.362q.15.15.362.147a.48.48 0 0 0 .363-.166l2.72-2.72a.24.24 0 0 1 .177-.073.24.24 0 0 1 .177.073.24.24 0 0 1 .073.177V14q0 .207.146.354A.48.48 0 0 0 8 14.5Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ArrowChevronUp;
