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
            d="M7.25 14a.75.75 0 0 0 1.5 0V8.31l2.72 2.72a.75.75 0 1 0 1.06-1.06l-4-4a.75.75 0 0 0-1.06 0l-4 4a.75.75 0 1 0 1.06 1.06l2.72-2.72zm4.22-7.47a.75.75 0 1 0 1.06-1.06l-4-4a.75.75 0 0 0-1.06 0l-4 4a.75.75 0 0 0 1.06 1.06L8 3.06z"
            clipRule="evenodd"
        />
    </svg>
);
export default ArrowChevronUp;
