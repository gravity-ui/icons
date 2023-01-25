import * as React from 'react';
import {SVGProps} from 'react';
const FolderHome = (props: SVGProps<SVGSVGElement>) => (
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
            d="m6.44 4.06.439.44H12.5A1.5 1.5 0 0 1 14 6v5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11V4.5A1.5 1.5 0 0 1 3.5 3h1.257a1.5 1.5 0 0 1 1.061.44l.621.62ZM.5 4.5a3 3 0 0 1 3-3h1.257a3 3 0 0 1 2.122.879L7.5 3h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3V4.5ZM8 7.453l1.5 1.25V9.5h-3v-.797L8 7.453ZM5 8.468a1 1 0 0 1 .36-.768l2-1.667a1 1 0 0 1 1.28 0l2 1.667a1 1 0 0 1 .36.768V10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8.468Z"
            clipRule="evenodd"
        />
    </svg>
);
export default FolderHome;
