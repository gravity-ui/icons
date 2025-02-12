import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const Ticket = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
                d="M11.091 2.318a.986.986 0 0 1 .106 1.485L11 4a.707.707 0 0 0 1 1l.197-.197a1 1 0 0 1 .288-.2.986.986 0 0 1 1.197.306l1.243 1.658c.575.766.36 1.862-.461 2.355a16.16 16.16 0 0 0-5.542 5.542 1.616 1.616 0 0 1-2.355.461l-1.658-1.243a.986.986 0 0 1-.106-1.485L5 12a.707.707 0 0 0-1-1l-.197.197a1 1 0 0 1-.288.2.986.986 0 0 1-1.197-.306L1.075 9.433a1.616 1.616 0 0 1 .461-2.355 16.16 16.16 0 0 0 5.542-5.542 1.616 1.616 0 0 1 2.355-.461zm-2.558-.043 1.201.9a2.208 2.208 0 0 0 3.09 3.09l.901 1.202a.116.116 0 0 1-.033.169 17.66 17.66 0 0 0-6.056 6.056.116.116 0 0 1-.17.033l-1.2-.9a2.208 2.208 0 0 0-3.09-3.09l-.901-1.202a.116.116 0 0 1 .033-.168 17.66 17.66 0 0 0 6.057-6.057.116.116 0 0 1 .168-.033M7.53 6.47a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06-1.06z"
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
const ForwardRef = forwardRef(Ticket);
export default ForwardRef;
