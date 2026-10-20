import * as React from 'react';
import type {SVGProps} from 'react';
const GripHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
            d="M3 4.25q-.518 0-.884.366a1.2 1.2 0 0 0-.366.884q0 .518.366.884T3 6.75t.884-.366.366-.884-.366-.884A1.2 1.2 0 0 0 3 4.25Zm5 0q-.518 0-.884.366a1.2 1.2 0 0 0-.366.884q0 .518.366.884T8 6.75t.884-.366.366-.884-.366-.884A1.2 1.2 0 0 0 8 4.25Zm5 0q-.518 0-.884.366a1.2 1.2 0 0 0-.366.884q0 .518.366.884T13 6.75t.884-.366.366-.884-.366-.884A1.2 1.2 0 0 0 13 4.25ZM4.25 10.5q0-.518-.366-.884A1.2 1.2 0 0 0 3 9.25q-.518 0-.884.366a1.2 1.2 0 0 0-.366.884q0 .518.366.884T3 11.75t.884-.366.366-.884ZM8 9.25q-.518 0-.884.366a1.2 1.2 0 0 0-.366.884q0 .518.366.884T8 11.75t.884-.366.366-.884-.366-.884A1.2 1.2 0 0 0 8 9.25Zm6.25 1.25q0-.518-.366-.884A1.2 1.2 0 0 0 13 9.25q-.518 0-.884.366a1.2 1.2 0 0 0-.366.884q0 .518.366.884t.884.366.884-.366.366-.884Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default GripHorizontal;
