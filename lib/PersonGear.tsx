import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const PersonGear = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        ref={ref}
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M7 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.5 1.299c0-.43-.36-.774-.785-.724C2.473 8.955 0 10.728 0 12.5A2.5 2.5 0 0 0 2.5 15h3.25a.75.75 0 0 0 0-1.5H2.5a1 1 0 0 1-1-1c0-.205.22-.809 1.32-1.459.765-.452 1.792-.813 2.969-.964.397-.051.711-.378.711-.778m8.002 1.89a2.22 2.22 0 0 1-1.66-2.138l-.68-.256a2.38 2.38 0 0 1-2.747.816l-.406.569c.57.788.57 1.87 0 2.657l.406.569a2.38 2.38 0 0 1 2.747.816l.68-.255a2.22 2.22 0 0 1 1.66-2.139zm-.112-2.396a.715.715 0 0 0-.418-.921l-1.798-.674a.865.865 0 0 0-1.114.506.87.87 0 0 1-1.32.395.884.884 0 0 0-1.23.2L7.434 9.805a.77.77 0 0 0 .179 1.076c.43.308.43.948 0 1.255a.77.77 0 0 0-.18 1.076l1.077 1.506a.884.884 0 0 0 1.23.2.87.87 0 0 1 1.32.395.865.865 0 0 0 1.114.506l1.798-.674a.715.715 0 0 0 .418-.92.715.715 0 0 1 .67-.966h.134a.81.81 0 0 0 .809-.809v-1.883a.81.81 0 0 0-.809-.808h-.135a.715.715 0 0 1-.669-.966m-1.833 2.659a1.052 1.052 0 1 1-2.103 0 1.052 1.052 0 0 1 2.103 0"
                clipRule="evenodd"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
);
const ForwardRef = forwardRef(PersonGear);
export default ForwardRef;
