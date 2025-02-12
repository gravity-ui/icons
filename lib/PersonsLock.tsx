import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const PersonsLock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M11.5 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 1.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m-.75 1.25a.75.75 0 0 1 .75-.75c1.238 0 2.363.385 3.178.962C15.496 8.04 16 8.81 16 9.577a1.923 1.923 0 0 1-1.923 1.923h-.327a.75.75 0 0 1 0-1.5h.327c.234 0 .423-.19.423-.423 0-.105-.099-.474-.688-.89C13.257 8.293 12.437 8 11.5 8a.75.75 0 0 1-.75-.75M2.188 8.686C2.743 8.294 3.563 8 4.5 8a.75.75 0 0 0 0-1.5c-1.238 0-2.363.385-3.178.962C.504 8.04 0 8.81 0 9.577 0 10.639.861 11.5 1.923 11.5h.327a.75.75 0 0 0 0-1.5h-.327a.423.423 0 0 1-.423-.423c0-.105.099-.474.688-.89M4.5 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 1.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m6.25 3.5h-.25V9a2.5 2.5 0 1 0-5 0v.5h-.25c-.69 0-1.25.56-1.25 1.25v3c0 .69.56 1.25 1.25 1.25h5.5c.69 0 1.25-.56 1.25-1.25v-3c0-.69-.56-1.25-1.25-1.25M9 9v.5H7V9a1 1 0 1 1 2 0m-3.5 2v2.5h5V11z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(PersonsLock);
export default ForwardRef;
