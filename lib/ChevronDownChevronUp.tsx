import * as React from 'react';
import {SVGProps} from 'react';
const ChevronDownChevronUp = (props: SVGProps<SVGSVGElement>) => (
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
            d="M5.03 1.47a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8 4.44 5.03 1.47Zm-1.06 12a.75.75 0 1 0 1.06 1.06L8 11.56l2.97 2.97a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5Z"
            clipRule="evenodd"
        />
    </svg>
);
export default ChevronDownChevronUp;
