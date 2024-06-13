import * as React from 'react';
import type {SVGProps} from 'react';
const ChartAreaStacked = (props: SVGProps<SVGSVGElement>) => (
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
                d="M10.257 4.2a.86.86 0 0 1-.86.274l-3.103-.776a2.81 2.81 0 0 0-2.796.876L1.242 7.152A3 3 0 0 0 .5 9.127V12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V3.309a1.933 1.933 0 0 0-3.4-1.258l-1.31 1.528zM14 6.48V3.31a.433.433 0 0 0-.762-.282l-1.842 2.15a2.36 2.36 0 0 1-2.362.753L5.93 5.154a1.31 1.31 0 0 0-1.303.408L2.37 8.139a1.5 1.5 0 0 0-.37.988v.685l2.304-1.44a2.59 2.59 0 0 1 2.458-.155l1.923.888a1.58 1.58 0 0 0 1.777-.317l.22-.22 1.575-1.574A1.86 1.86 0 0 1 14 6.479m-12 5.52c0 .277.226.501.5.501h11a.5.5 0 0 0 .5-.5V8.337a.4.4 0 0 0-.683-.283L11.523 9.85a3.08 3.08 0 0 1-3.466.618L6.134 9.58a1.09 1.09 0 0 0-1.035.066L2.353 11.36a.75.75 0 0 0-.353.637"
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
export default ChartAreaStacked;
