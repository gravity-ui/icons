import * as React from 'react';
import type {SVGProps} from 'react';
const ChevronsExpandHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
                d="M4.985 12.234a.48.48 0 0 0 .146-.35.48.48 0 0 0-.138-.348l-3.359-3.36q-.177-.176 0-.353L4.987 4.47l.007-.006a.48.48 0 0 0 .159-.357.48.48 0 0 0-.147-.362.48.48 0 0 0-.362-.147.48.48 0 0 0-.363.166L.397 7.647A.48.48 0 0 0 .25 8q0 .207.146.353l3.887 3.887a.48.48 0 0 0 .351.14.48.48 0 0 0 .35-.146Zm6.031-8.468a.48.48 0 0 0-.146.35.48.48 0 0 0 .138.348l3.357 3.36q.177.176 0 .353l-3.353 3.354-.007.006a.48.48 0 0 0-.159.357.48.48 0 0 0 .147.362q.15.15.362.147a.48.48 0 0 0 .363-.166l3.885-3.884A.48.48 0 0 0 15.75 8a.48.48 0 0 0-.146-.353L11.717 3.76a.48.48 0 0 0-.351-.14.48.48 0 0 0-.35.146Z"
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
export default ChevronsExpandHorizontal;
