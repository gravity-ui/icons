import * as React from 'react';
import type {SVGProps} from 'react';
const MathUnionShape = (props: SVGProps<SVGSVGElement>) => (
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
            d="M1.75 2.75V8.5q0 1.193.439 2.3a6.2 6.2 0 0 0 1.392 2.12 6.2 6.2 0 0 0 2.118 1.391A6.2 6.2 0 0 0 8 14.75q1.193 0 2.3-.439a6.2 6.2 0 0 0 2.12-1.392 6.2 6.2 0 0 0 1.391-2.118A6.2 6.2 0 0 0 14.25 8.5V2.75q0-.622-.44-1.06a1.45 1.45 0 0 0-1.06-.44h-1.5q-.621 0-1.06.44-.44.439-.44 1.06V8.5q0 .725-.513 1.237A1.7 1.7 0 0 1 8 10.25q-.725 0-1.237-.513A1.7 1.7 0 0 1 6.25 8.5V2.75q0-.622-.44-1.06a1.45 1.45 0 0 0-1.06-.44h-1.5q-.622 0-1.06.44-.44.439-.44 1.06Zm1 5.75V2.75q0-.207.146-.354a.48.48 0 0 1 .354-.146h1.5q.207 0 .354.146a.48.48 0 0 1 .146.354V8.5q0 1.14.805 1.945A2.65 2.65 0 0 0 8 11.25a2.65 2.65 0 0 0 1.945-.805A2.65 2.65 0 0 0 10.75 8.5V2.75q0-.207.146-.354a.48.48 0 0 1 .354-.146h1.5q.207 0 .354.146a.48.48 0 0 1 .146.354V8.5a5.2 5.2 0 0 1-.4 2.01 5.2 5.2 0 0 1-1.138 1.702 5.2 5.2 0 0 1-1.703 1.138 5.2 5.2 0 0 1-2.009.4 5.2 5.2 0 0 1-1.932-.369 5.2 5.2 0 0 1-1.78-1.169 5.2 5.2 0 0 1-1.17-1.78A5.2 5.2 0 0 1 2.75 8.5Z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default MathUnionShape;
