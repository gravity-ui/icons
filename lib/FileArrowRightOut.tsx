import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const FileArrowRightOut = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M11.5 7.14a3 3 0 0 0-.758-1.992L8.395 2.507A3 3 0 0 0 6.153 1.5H4a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h6.25a.75.75 0 0 0 0-1.5H4a1.5 1.5 0 0 1-1.5-1.5v-7A1.5 1.5 0 0 1 4 3h1.5v2a3 3 0 0 0 3 3h2.25a.75.75 0 0 0 .75-.75zM9.856 6.5H8.5A1.5 1.5 0 0 1 7 5V3.262q.15.103.274.241L9.62 6.144a1.5 1.5 0 0 1 .235.356M13.44 11l-.72.72a.75.75 0 1 0 1.061 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 1 0-1.06 1.06l.72.72H6.75a.75.75 0 0 0 0 1.5z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(FileArrowRightOut);
export default ForwardRef;
