import * as React from 'react';
import {SVGProps} from 'react';
const ArrowUpToCloud = (props: SVGProps<SVGSVGElement>) => (
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
                d="M4.5 5.25a3.25 3.25 0 0 1 6.398-.811.75.75 0 0 0 .702.563A3 3 0 0 1 11.5 11h-.75a.75.75 0 0 0 0 1.5h.75a4.5 4.5 0 0 0 .687-8.948 4.751 4.751 0 0 0-9.184 1.522A3.751 3.751 0 0 0 3.75 12.5h1.5a.75.75 0 0 0 0-1.5h-1.5a2.25 2.25 0 0 1-.002-4.5h.03a.75.75 0 0 0 .747-.843A3.289 3.289 0 0 1 4.5 5.25Zm4.25 3.06.72.72a.75.75 0 1 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06l.72-.72v6.19a.75.75 0 0 0 1.5 0V8.31Z"
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
export default ArrowUpToCloud;
