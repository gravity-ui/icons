import * as React from 'react';
import {SVGProps} from 'react';
const AlignVerticalDown = (props: SVGProps<SVGSVGElement>) => (
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
            d="M14.25 14a.75.75 0 0 0 0-1.5H1.75a.75.75 0 0 0 0 1.5h12.5ZM10.5 9.5H12a.5.5 0 0 0 .5-.5V3.5A.5.5 0 0 0 12 3h-1.5a.5.5 0 0 0-.5.5V9a.5.5 0 0 0 .5.5ZM12 11a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1.5a2 2 0 0 0-2 2V9a2 2 0 0 0 2 2H12ZM4 9.5h1.5A.5.5 0 0 0 6 9V7a.5.5 0 0 0-.5-.5H4a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5ZM5.5 11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1.5Z"
            clipRule="evenodd"
        />
    </svg>
);
export default AlignVerticalDown;
