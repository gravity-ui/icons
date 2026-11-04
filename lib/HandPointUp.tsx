import * as React from 'react';
import type {SVGProps} from 'react';
const HandPointUp = (props: SVGProps<SVGSVGElement>) => (
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
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth={0.5}
                d="m2.416 10.397 3.662 2.847 7.227-.482 1.103-4.136a2.64 2.64 0 0 0-.345-2.2 2.64 2.64 0 0 0-1.86-1.222l-2.744-.457a.23.23 0 0 1-.203-.193l-.662-2.979a1.64 1.64 0 0 0-.667-1.01A1.64 1.64 0 0 0 6.757.26q-.642.07-1.074.552a1.64 1.64 0 0 0-.432 1.13v5.433q0 .25-.25.25a.3.3 0 0 1-.06-.007l-1.044-.261a1.68 1.68 0 0 0-1.149.11 1.68 1.68 0 0 0-.823.81 1.68 1.68 0 0 0-.13 1.147q.14.597.622.973Zm10.154 1.242a.23.23 0 0 1-.225.185l-5.858.39a.24.24 0 0 1-.17-.052L3.03 9.607a.7.7 0 0 1-.26-.41.7.7 0 0 1 .055-.482.7.7 0 0 1 .346-.34.7.7 0 0 1 .484-.048l1.042.26 1.553.389V1.943a.67.67 0 0 1 .175-.464.67.67 0 0 1 .441-.227.67.67 0 0 1 .48.126.67.67 0 0 1 .272.414l.662 2.98.183.822.831.14 2.744.456q.765.128 1.183.778.42.65.22 1.4zm1.165 3.077a.48.48 0 0 0-.168-.34.48.48 0 0 0-.352-.125l-7.005.5a.48.48 0 0 0-.348.169.48.48 0 0 0-.124.366q.015.21.174.346.16.136.373.117l6.996-.5a.48.48 0 0 0 .336-.174.48.48 0 0 0 .118-.36Z"
                clipRule="evenodd"
                style={{
                    strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
                }}
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default HandPointUp;
