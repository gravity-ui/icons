import * as React from 'react';
import type {SVGProps} from 'react';
const Binoculars = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M1.522 10.68a2.14 2.14 0 0 0 2.11 1.82 2.125 2.125 0 1 0-2.11-1.82ZM3.64 14h-.015a3.626 3.626 0 0 1-3.558-2.927 3.6 3.6 0 0 1 .256-2.212L2.98 2.98a2.516 2.516 0 0 1 4.802 1.237L7.673 5.6a1.474 1.474 0 0 1 .655 0l-.11-1.382a2.516 2.516 0 0 1 4.801-1.237l2.658 5.88a3.6 3.6 0 0 1 .256 2.213A3.626 3.626 0 0 1 12.375 14h-.015a3.64 3.64 0 0 1-3.628-3.35l-.174-2.176A.963.963 0 0 0 8 8.312a.963.963 0 0 0-.558.162l-.174 2.176A3.64 3.64 0 0 1 3.64 14Zm-.015-7.25c.91 0 1.742.336 2.379.89l.283-3.542a1.016 1.016 0 0 0-1.94-.5L2.89 6.825a3.64 3.64 0 0 1 .736-.075Zm10.853 3.93a2.125 2.125 0 1 0-2.11 1.82 2.14 2.14 0 0 0 2.11-1.82Zm-2.826-7.082 1.459 3.227a3.61 3.61 0 0 0-3.115.815l-.283-3.542a1.016 1.016 0 0 1 1.94-.5Z"
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
export default Binoculars;
