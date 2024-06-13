import * as React from 'react';
import type {SVGProps} from 'react';
const CopyXmark = (props: SVGProps<SVGSVGElement>) => (
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
            d="M9.5 12c0 .414-.168.79-.44 1.06A1.5 1.5 0 0 1 8 13.5H4a1.5 1.5 0 0 1-1.06-.44A1.5 1.5 0 0 1 2.5 12V8c0-.414.168-.79.44-1.06A1.5 1.5 0 0 1 4 6.5h4c.414 0 .79.168 1.06.44.272.27.44.646.44 1.06zm-1.47-1.03L7.06 10l.97-.97a.75.75 0 0 0-1.06-1.06L6 8.94l-.97-.97a.75.75 0 0 0-1.06 1.06l.97.97-.97.97a.75.75 0 0 0 1.06 1.06l.97-.97.97.97a.75.75 0 0 0 1.06-1.06M6.5 5H8a3 3 0 0 1 3 3v1.5h1A1.5 1.5 0 0 0 13.5 8V4A1.5 1.5 0 0 0 12 2.5H8A1.5 1.5 0 0 0 6.5 4zM5 4a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1v1a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h1z"
            clipRule="evenodd"
        />
    </svg>
);
export default CopyXmark;
