import * as React from 'react';
import {SVGProps} from 'react';
const Lines3Horizontal = (props: SVGProps<SVGSVGElement>) => (
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
            d="M1.75 4a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5h-11A.75.75 0 0 1 1.75 4Zm0 4a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5h-11A.75.75 0 0 1 1.75 8Zm.75 3.25a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 0-1.5h-11Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Lines3Horizontal;
