import * as React from 'react';
import type {SVGProps} from 'react';
const Grip = (props: SVGProps<SVGSVGElement>) => (
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
            d="M6.384 3.884Q6.75 3.518 6.75 3t-.366-.884A1.2 1.2 0 0 0 5.5 1.75q-.518 0-.884.366A1.2 1.2 0 0 0 4.25 3q0 .518.366.884t.884.366.884-.366ZM11.75 3q0-.518-.366-.884a1.2 1.2 0 0 0-.884-.366q-.518 0-.884.366A1.2 1.2 0 0 0 9.25 3q0 .518.366.884t.884.366.884-.366T11.75 3Zm-5 5q0-.518-.366-.884A1.2 1.2 0 0 0 5.5 6.75q-.518 0-.884.366A1.2 1.2 0 0 0 4.25 8q0 .518.366.884t.884.366.884-.366T6.75 8Zm5 0q0-.518-.366-.884a1.2 1.2 0 0 0-.884-.366q-.518 0-.884.366A1.2 1.2 0 0 0 9.25 8q0 .518.366.884t.884.366.884-.366T11.75 8Zm-5.366 5.884q.366-.366.366-.884t-.366-.884a1.2 1.2 0 0 0-.884-.366q-.518 0-.884.366A1.2 1.2 0 0 0 4.25 13q0 .518.366.884t.884.366.884-.366ZM11.75 13q0-.518-.366-.884a1.2 1.2 0 0 0-.884-.366q-.518 0-.884.366A1.2 1.2 0 0 0 9.25 13q0 .518.366.884t.884.366.884-.366.366-.884Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Grip;
