import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const AbbrApi = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M5.02 11.419 4.691 10H2.808l-.327 1.419a.75.75 0 1 1-1.462-.338L2.407 5.07a1.379 1.379 0 0 1 2.686 0l1.388 6.012a.75.75 0 1 1-1.462.338m-1.27-5.5.597 2.58H3.155zM14.5 4.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0zM8.25 4a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 1.5 0V9.5h.5a2.75 2.75 0 0 0 0-5.5zM9.5 8H9V5.5h.5a1.25 1.25 0 0 1 0 2.5"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(AbbrApi);
export default ForwardRef;
