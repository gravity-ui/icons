import * as React from 'react';
import {SVGProps} from 'react';
const ChartColumn = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.5 3.5h-2a.5.5 0 0 0-.5.5v8.5h2.5a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5ZM11 14h2.5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1H7a2 2 0 0 0-2 2v1H2.5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2H11Zm-4.5-1.5h3v-6H7a.5.5 0 0 0-.5.5v5.5ZM5 9.5H2.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H5v-3Z"
            clipRule="evenodd"
        />
    </svg>
);
export default ChartColumn;
