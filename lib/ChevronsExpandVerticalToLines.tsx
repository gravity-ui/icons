import * as React from 'react';
import type {SVGProps} from 'react';
const ChevronsExpandVerticalToLines = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <g fill="currentColor" clipPath="url(#a)">
            <path d="M2 15.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75M2 .75A.75.75 0 0 1 2.75 0h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 .75m2.97 9.28a.75.75 0 1 1 1.06-1.06L8 10.94l1.97-1.97a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0zm0-3a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06L8 5.06 6.03 7.03a.75.75 0 0 1-1.06 0" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="currentColor" d="M0 16V0h16v16z" />
            </clipPath>
        </defs>
    </svg>
);
export default ChevronsExpandVerticalToLines;
