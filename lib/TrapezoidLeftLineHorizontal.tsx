import * as React from 'react';
import type {SVGProps} from 'react';
const TrapezoidLeftLineHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
                d="M.25 8q0 .207.146.354A.48.48 0 0 0 .75 8.5H2q.25 0 .25.25v2.234q0 .794.499 1.412.498.618 1.274.787l7 1.517a2.15 2.15 0 0 0 1.89-.448q.837-.675.837-1.752V8.75q0-.25.25-.25h1.25a.48.48 0 0 0 .354-.146A.48.48 0 0 0 15.75 8a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146H14q-.25 0-.25-.25V3.5q0-1.077-.837-1.752a2.15 2.15 0 0 0-1.89-.448l-7 1.517a2.2 2.2 0 0 0-1.275.787 2.2 2.2 0 0 0-.498 1.412V7.25q0 .25-.25.25H.75a.48.48 0 0 0-.354.146A.48.48 0 0 0 .25 8Zm3.25-.5q-.25 0-.25-.25V5.016q0-.441.277-.784.277-.345.708-.437l7-1.517q.585-.127 1.05.248t.465.974v3.75q0 .25-.25.25zm-.25 3.484V8.75q0-.25.25-.25h9q.25 0 .25.25v3.75q0 .598-.465.974-.465.375-1.05.248l-7-1.517a1.22 1.22 0 0 1-.708-.437 1.2 1.2 0 0 1-.277-.784Z"
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
export default TrapezoidLeftLineHorizontal;
