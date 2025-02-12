import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const ArrowsRotateRightSlash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M2.904 3.965a6.47 6.47 0 0 0-1.349 3.184.75.75 0 1 0 1.488.194 5 5 0 0 1 .93-2.309l6.992 6.992A4.98 4.98 0 0 1 8 13a4.98 4.98 0 0 1-3.57-1.5h1.32a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0v-1.06A6.48 6.48 0 0 0 8 14.5a6.47 6.47 0 0 0 4.035-1.404l.935.934a.75.75 0 1 0 1.06-1.06l-11-11a.75.75 0 0 0-1.06 1.06zm9.85 5.587 1.156 1.156a6.5 6.5 0 0 0 .534-1.857.75.75 0 1 0-1.487-.194q-.061.463-.203.895M5.291 2.09l1.157 1.157A5 5 0 0 1 8 3a4.98 4.98 0 0 1 3.57 1.5h-1.32a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-1.5 0v1.06A6.48 6.48 0 0 0 8 1.5a6.5 6.5 0 0 0-2.709.59"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(ArrowsRotateRightSlash);
export default ForwardRef;
