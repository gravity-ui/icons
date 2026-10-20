import * as React from 'react';
import type {SVGProps} from 'react';
const Check = (props: SVGProps<SVGSVGElement>) => (
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
            d="m13.338 3.631-.002-.001-.01-.01a.48.48 0 0 0-.364-.118.48.48 0 0 0-.341.173L7.148 10.06a.24.24 0 0 1-.17.086.24.24 0 0 1-.197-.072L3.853 7.147a.48.48 0 0 0-.348-.138.48.48 0 0 0-.35.146.48.48 0 0 0-.146.35.48.48 0 0 0 .14.351l3.497 3.497a.48.48 0 0 0 .373.147.48.48 0 0 0 .36-.175l6-7a.48.48 0 0 0 .12-.364.48.48 0 0 0-.16-.329z"
            clipRule="evenodd"
            style={{
                strokeWidth: 'max(0px,calc((var(--g-icon-stroke-width,1.5) - 1)*1px))',
            }}
        />
    </svg>
);
export default Check;
