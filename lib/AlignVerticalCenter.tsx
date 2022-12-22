import * as React from 'react';
import {SVGProps} from 'react';
const AlignVerticalCenter = (props: SVGProps<SVGSVGElement>) => (
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
            d="M10.5 3H12a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5Zm-2 4.25V3.5a2 2 0 0 1 2-2H12a2 2 0 0 1 2 2v3.75h.25a.75.75 0 0 1 0 1.5H14v3.75a2 2 0 0 1-2 2h-1.5a2 2 0 0 1-2-2V8.75h-1V10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.75h-.25a.75.75 0 0 1 0-1.5H2V6a2 2 0 0 1 2-2h1.5a2 2 0 0 1 2 2v1.25h1ZM6 8v2a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h1.5A.5.5 0 0 1 6 6v2Z"
            clipRule="evenodd"
        />
    </svg>
);
export default AlignVerticalCenter;
