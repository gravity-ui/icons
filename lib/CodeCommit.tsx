import * as React from 'react';
import {SVGProps} from 'react';
const CodeCommit = (props: SVGProps<SVGSVGElement>) => (
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
            d="M7.25 1.75v2.32a4.001 4.001 0 0 0 0 7.86v2.32a.75.75 0 1 0 1.5 0v-2.32a4.001 4.001 0 0 0 0-7.86V1.75a.75.75 0 1 0-1.5 0ZM8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
            clipRule="evenodd"
        />
    </svg>
);
export default CodeCommit;
