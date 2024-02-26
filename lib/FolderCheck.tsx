import * as React from 'react';
import type {SVGProps} from 'react';
const FolderCheck = (props: SVGProps<SVGSVGElement>) => (
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
            d="m6.44 4.06.439.44H12.5A1.5 1.5 0 0 1 14 6v5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11V4.5A1.5 1.5 0 0 1 3.5 3h1.257a1.5 1.5 0 0 1 1.061.44l.621.62ZM.5 4.5a3 3 0 0 1 3-3h1.257a3 3 0 0 1 2.122.879L7.5 3h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3V4.5Zm10.35 2.45a.75.75 0 1 0-1.2-.9L7.469 8.958 6.28 7.77a.75.75 0 0 0-1.06 1.06l1.8 1.8a.75.75 0 0 0 1.13-.08l2.7-3.6Z"
            clipRule="evenodd"
        />
    </svg>
);
export default FolderCheck;
