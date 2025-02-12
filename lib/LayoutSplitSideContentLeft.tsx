import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const LayoutSplitSideContentLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
                d="M3 12.5h-.5A.5.5 0 0 1 2 12V4a.5.5 0 0 1 .5-.5H3a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5M2.5 14H3a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-.5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2M13 12.5H8.5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1H13a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1M8.5 14H13a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 13 2H8.5A2.5 2.5 0 0 0 6 4.5v7A2.5 2.5 0 0 0 8.5 14"
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
const ForwardRef = forwardRef(LayoutSplitSideContentLeft);
export default ForwardRef;
