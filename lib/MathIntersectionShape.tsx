import * as React from 'react';
import type {SVGProps} from 'react';
const MathIntersectionShape = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13 13.25V7.5a5 5 0 0 0-10 0v5.75c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25V7.5a3 3 0 0 1 6 0v5.75c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25m1.5-5.75v5.75A1.75 1.75 0 0 1 12.75 15h-1.5a1.75 1.75 0 0 1-1.75-1.75V7.5a1.5 1.5 0 1 0-3 0v5.75A1.75 1.75 0 0 1 4.75 15h-1.5a1.75 1.75 0 0 1-1.75-1.75V7.5a6.5 6.5 0 0 1 13 0"
            clipRule="evenodd"
        />
    </svg>
);
export default MathIntersectionShape;
