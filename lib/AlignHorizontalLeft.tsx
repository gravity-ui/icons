import * as React from 'react';
import {SVGProps} from 'react';
const AlignHorizontalLeft = (props: SVGProps<SVGSVGElement>) => (
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
            d="M2 14.25a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-1.5 0v12.5Zm4.5-3.75V12a.5.5 0 0 0 .5.5h5.5a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0-.5.5ZM5 12a2 2 0 0 0 2 2h5.5a2 2 0 0 0 2-2v-1.5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2V12Zm1.5-8v1.5A.5.5 0 0 0 7 6h2a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0-.5.5ZM5 5.5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1.5Z"
            clipRule="evenodd"
        />
    </svg>
);
export default AlignHorizontalLeft;
