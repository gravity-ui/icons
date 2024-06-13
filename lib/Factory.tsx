import * as React from 'react';
import type {SVGProps} from 'react';
const Factory = (props: SVGProps<SVGSVGElement>) => (
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
            d="M9.5 5.5v2.803l2.332-1.555L13.5 5.636V12.5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h1.5A.5.5 0 0 1 5 3v5.446l2.382-1.733L9.5 5.173zM6.5 3v2.5L8 4.41l.903-.657A1.32 1.32 0 0 1 11 4.82v.68l1.02-.68.463-.309.429-.285A1.343 1.343 0 0 1 15 5.343V12.5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1.5a2 2 0 0 1 2 2m-1.75 7a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z"
            clipRule="evenodd"
        />
    </svg>
);
export default Factory;
