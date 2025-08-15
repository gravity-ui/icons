import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const BranchesRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M12 2.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0m-1.372.75a2.251 2.251 0 1 0 0-1.5h-.378a3 3 0 0 0-3 3v2.25H5.372a2.25 2.25 0 1 0 0 1.5H7.25V11a3 3 0 0 0 3 3h.378a2.251 2.251 0 1 0 0-1.5h-.378a1.5 1.5 0 0 1-1.5-1.5V8.75h1.878a2.251 2.251 0 1 0 0-1.5H8.75V5a1.5 1.5 0 0 1 1.5-1.5zM12 13.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0m.75-4.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5M2.5 8A.75.75 0 1 0 4 8a.75.75 0 0 0-1.5 0"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(BranchesRight);
export default ForwardRef;
