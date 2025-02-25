import * as React from 'react';
import type {SVGProps} from 'react';
const ArrowsExpand = (props: SVGProps<SVGSVGElement>) => (
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
            d="M7.47 1.22a.75.75 0 0 1 1.06 0l1.75 1.75a.75.75 0 1 1-1.06 1.06l-.47-.47v8.88l.47-.47a.75.75 0 1 1 1.06 1.06l-1.75 1.75a.75.75 0 0 1-1.06 0l-1.75-1.75a.75.75 0 1 1 1.06-1.06l.47.47V3.56l-.47.47a.75.75 0 0 1-1.06-1.06zM1.22 7.47a.75.75 0 0 0 0 1.06l1.75 1.75a.75.75 0 1 0 1.06-1.06L2.81 8l1.22-1.22a.75.75 0 0 0-1.06-1.06zm13.56 1.06-1.75 1.75a.75.75 0 1 1-1.06-1.06L13.19 8l-1.22-1.22a.75.75 0 0 1 1.06-1.06l1.75 1.75a.75.75 0 0 1 0 1.06"
            clipRule="evenodd"
        />
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M2.5 8h11"
        />
    </svg>
);
export default ArrowsExpand;
