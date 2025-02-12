import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const HardDrive = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M12 8.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 11v-1A1.5 1.5 0 0 1 4 8.5zm.89-1.366L11.488 4.33a1.5 1.5 0 0 0-1.342-.829H5.854a1.5 1.5 0 0 0-1.342.83L3.11 7.133A3 3 0 0 1 4 7h8a3 3 0 0 1 .89.134M15 9.18V11a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V9.18a5 5 0 0 1 .528-2.236L3.17 3.658A3 3 0 0 1 5.854 2h4.292a3 3 0 0 1 2.683 1.658l1.643 3.286A5 5 0 0 1 15 9.18m-6 .57a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(HardDrive);
export default ForwardRef;
