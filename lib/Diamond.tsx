import * as React from 'react';
import type {SVGProps} from 'react';
const Diamond = (props: SVGProps<SVGSVGElement>) => (
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
                d="m6.056 1.105-4.95 4.95A2.65 2.65 0 0 0 .3 7.999q0 1.14.805 1.944l4.95 4.95A2.65 2.65 0 0 0 8 15.698a2.65 2.65 0 0 0 1.944-.805l4.95-4.95A2.65 2.65 0 0 0 15.7 8a2.65 2.65 0 0 0-.805-1.944l-4.95-4.95A2.65 2.65 0 0 0 8 .3a2.65 2.65 0 0 0-1.944.805Zm8.13 5.658Q14.7 7.276 14.7 8t-.512 1.237l-4.95 4.95A1.7 1.7 0 0 1 8 14.699q-.724 0-1.237-.512l-4.95-4.95A1.7 1.7 0 0 1 1.301 8q0-.724.512-1.237l4.95-4.95A1.7 1.7 0 0 1 8 1.301q.724 0 1.237.512z"
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
export default Diamond;
