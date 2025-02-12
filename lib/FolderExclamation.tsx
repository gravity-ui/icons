import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const FolderExclamation = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="m6.879 4.5-.44-.44-.621-.62A1.5 1.5 0 0 0 4.758 3H3.5A1.5 1.5 0 0 0 2 4.5V11a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 14 11V6a1.5 1.5 0 0 0-1.5-1.5zM3.5 1.5a3 3 0 0 0-3 3V11a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-5l-.621-.621A3 3 0 0 0 4.757 1.5zm5.5 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-.25-4.25a.75.75 0 1 0-1.5 0v1.5a.75.75 0 1 0 1.5 0z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(FolderExclamation);
export default ForwardRef;
