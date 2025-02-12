import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const PinSlashFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M10.5 2.255v-.01c.003-.03.013-.157-.361-.35C9.703 1.668 8.967 1.5 8 1.5s-1.703.169-2.138.394c-.375.194-.365.32-.362.351v.01c0 .008-.002.024.005.048L4.38 1.179C5.02.393 6.4 0 8 0c2.21 0 4 .75 4 2.25 0 .738-.433 1.294-1.136 1.669l.825 2.31c1.553.48 2.561 1.32 2.561 2.52 0 .617-.266 1.138-.734 1.565L5.738 2.536q.052.033.124.07C6.297 2.83 7.033 3 8 3s1.703-.169 2.139-.394c.374-.194.364-.32.361-.351M4.537 5.597l-.226.632C2.758 6.71 1.75 7.55 1.75 8.75c0 1.854 2.402 2.848 5.5 2.985V15a.75.75 0 0 0 1.5 0v-3.266a14 14 0 0 0 1.742-.182l2.478 2.478a.75.75 0 1 0 1.06-1.06l-11-11a.75.75 0 0 0-1.06 1.06z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(PinSlashFill);
export default ForwardRef;
