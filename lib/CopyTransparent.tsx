import * as React from 'react';
import type {SVGProps} from 'react';
const CopyTransparent = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8 2.5h4A1.5 1.5 0 0 1 13.5 4v4A1.5 1.5 0 0 1 12 9.5h-1V8a3 3 0 0 0-3-3H6.5V4A1.5 1.5 0 0 1 8 2.5ZM5 5V4a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1v1a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h1Zm4.5 6v1A1.5 1.5 0 0 1 8 13.5H4A1.5 1.5 0 0 1 2.5 12V8A1.5 1.5 0 0 1 4 6.5h1V8a3 3 0 0 0 3 3h1.5Zm0-1.5H8A1.5 1.5 0 0 1 6.5 8V6.5H8A1.5 1.5 0 0 1 9.5 8v1.5Z"
            clipRule="evenodd"
        />
    </svg>
);
export default CopyTransparent;
