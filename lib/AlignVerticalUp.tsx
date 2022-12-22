import * as React from 'react';
import {SVGProps} from 'react';
const AlignVerticalUp = (props: SVGProps<SVGSVGElement>) => (
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
            d="M14.25 2a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5h12.5ZM10.5 6.5H12a.5.5 0 0 1 .5.5v5.5a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5ZM12 5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-1.5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2H12ZM4 6.5h1.5A.5.5 0 0 1 6 7v2a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5ZM5.5 5a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1.5Z"
            clipRule="evenodd"
        />
    </svg>
);
export default AlignVerticalUp;
