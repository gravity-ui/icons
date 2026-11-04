import * as React from 'react';
import type {SVGProps} from 'react';
const ArrowUpToLine = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth={0.5}
            d="M14.75 1.75a.48.48 0 0 0-.146-.354.48.48 0 0 0-.354-.146H1.75a.48.48 0 0 0-.354.146.48.48 0 0 0-.146.354q0 .207.146.354a.48.48 0 0 0 .354.146h12.5a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354ZM8.353 4.397A.48.48 0 0 0 8 4.25a.48.48 0 0 0-.353.146L5.15 6.893v.001a.48.48 0 0 0-.131.346q.003.203.146.345.143.143.345.146a.48.48 0 0 0 .346-.13V7.6l1.217-1.217q.177-.177.354 0a.24.24 0 0 1 .073.177v7.69q0 .207.146.354A.48.48 0 0 0 8 14.75a.48.48 0 0 0 .354-.146.48.48 0 0 0 .146-.354V6.56a.24.24 0 0 1 .073-.177.24.24 0 0 1 .177-.073.24.24 0 0 1 .177.073l1.22 1.22.006.007a.48.48 0 0 0 .357.159.48.48 0 0 0 .362-.147q.15-.15.147-.362a.48.48 0 0 0-.166-.363z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default ArrowUpToLine;
