import * as React from 'react';
import type {SVGProps} from 'react';
const LayoutSplitSideContentRight = (props: SVGProps<SVGSVGElement>) => (
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
                d="M3 12.5h4.5a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1M7.5 14H3a2.5 2.5 0 0 1-2.5-2.5v-7A2.5 2.5 0 0 1 3 2h4.5A2.5 2.5 0 0 1 10 4.5v7A2.5 2.5 0 0 1 7.5 14m5.5-1.5h.5a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H13a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5m.5 1.5H13a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h.5a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2"
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
export default LayoutSplitSideContentRight;
