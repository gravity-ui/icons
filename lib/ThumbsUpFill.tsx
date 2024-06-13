import * as React from 'react';
import type {SVGProps} from 'react';
const ThumbsUpFill = (props: SVGProps<SVGSVGElement>) => (
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
            d="M7.1 1.685a1.38 1.38 0 0 1 2.542.984L8.93 6h3.94a2 2 0 0 1 1.927 2.535l-.879 3.162A4 4 0 0 1 9.596 14.6L4.5 14 4 7zM2.749 7.447a.75.75 0 1 0-1.496.106l.5 7a.75.75 0 0 0 1.496-.106z"
            clipRule="evenodd"
        />
    </svg>
);
export default ThumbsUpFill;
