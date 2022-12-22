import * as React from 'react';
import {SVGProps} from 'react';
const ChevronUpChevronDown = (props: SVGProps<SVGSVGElement>) => (
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
            d="M3.97 4.47a.75.75 0 0 0 1.06 1.06L8 2.56l2.97 2.97a.75.75 0 1 0 1.06-1.06L8.53.97a.75.75 0 0 0-1.06 0l-3.5 3.5Zm1.06 6a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06L8 13.44l-2.97-2.97Z"
            clipRule="evenodd"
        />
    </svg>
);
export default ChevronUpChevronDown;
