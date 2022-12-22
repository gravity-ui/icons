import * as React from 'react';
import {SVGProps} from 'react';
const AlignHorizontalCenter = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13 10.5V12a.5.5 0 0 1-.5.5h-9A.5.5 0 0 1 3 12v-1.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5Zm-4.25-2h3.75a2 2 0 0 1 2 2V12a2 2 0 0 1-2 2H8.75v.25a.75.75 0 0 1-1.5 0V14H3.5a2 2 0 0 1-2-2v-1.5a2 2 0 0 1 2-2h3.75v-1H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h1.25v-.25a.75.75 0 0 1 1.5 0V2H10a2 2 0 0 1 2 2v1.5a2 2 0 0 1-2 2H8.75v1ZM8 6H6a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H8Z"
            clipRule="evenodd"
        />
    </svg>
);
export default AlignHorizontalCenter;
