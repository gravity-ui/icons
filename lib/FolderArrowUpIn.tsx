import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const FolderArrowUpIn = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="m6.44 3.56.439.44H12.5A1.5 1.5 0 0 1 14 5.5v5a1.5 1.5 0 0 1-1.5 1.5h-1.75a.75.75 0 0 0 0 1.5h1.75a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3h-5l-.621-.621A3 3 0 0 0 4.757 1H3.5a3 3 0 0 0-3 3v6.5a3 3 0 0 0 3 3h1.75a.75.75 0 0 0 0-1.5H3.5A1.5 1.5 0 0 1 2 10.5V4a1.5 1.5 0 0 1 1.5-1.5h1.257a1.5 1.5 0 0 1 1.061.44zm2.31 5 .72.72a.75.75 0 1 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06l.72-.72v6.69a.75.75 0 0 0 1.5 0z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(FolderArrowUpIn);
export default ForwardRef;
