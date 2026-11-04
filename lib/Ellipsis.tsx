import * as React from 'react';
import type {SVGProps} from 'react';
const Ellipsis = (props: SVGProps<SVGSVGElement>) => (
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
            d="M4.25 8q0-.518-.366-.884A1.2 1.2 0 0 0 3 6.75q-.518 0-.884.366A1.2 1.2 0 0 0 1.75 8q0 .518.366.884T3 9.25t.884-.366T4.25 8ZM8 9.25q.518 0 .884-.366T9.25 8t-.366-.884A1.2 1.2 0 0 0 8 6.75q-.518 0-.884.366A1.2 1.2 0 0 0 6.75 8q0 .518.366.884T8 9.25Zm5 0q.518 0 .884-.366T14.25 8t-.366-.884A1.2 1.2 0 0 0 13 6.75q-.518 0-.884.366A1.2 1.2 0 0 0 11.75 8q0 .518.366.884T13 9.25Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Ellipsis;
