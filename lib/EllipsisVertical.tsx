import * as React from 'react';
import type {SVGProps} from 'react';
const EllipsisVertical = (props: SVGProps<SVGSVGElement>) => (
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
            d="M9.25 3q0-.518-.366-.884A1.2 1.2 0 0 0 8 1.75q-.518 0-.884.366A1.2 1.2 0 0 0 6.75 3q0 .518.366.884T8 4.25t.884-.366T9.25 3ZM8 9.25q.518 0 .884-.366T9.25 8t-.366-.884A1.2 1.2 0 0 0 8 6.75q-.518 0-.884.366A1.2 1.2 0 0 0 6.75 8q0 .518.366.884T8 9.25Zm0 5q.518 0 .884-.366T9.25 13t-.366-.884A1.2 1.2 0 0 0 8 11.75q-.518 0-.884.366A1.2 1.2 0 0 0 6.75 13q0 .518.366.884T8 14.25Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default EllipsisVertical;
